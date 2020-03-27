export function parseBin(sql, transform) {
    if (transform.type !== 'bin') {
        return sql;
    }
    const { field, as, extent, maxbins } = transform;
    const numBins = extent[1] - extent[0];
    let caseSql = `CASE WHEN ${field} >= ${extent[1]} THEN ${numBins === 0 ? 0 : maxbins - 1} else cast((cast(${field} AS float) - ${extent[0]}) * ${maxbins /
        (numBins || 1)} AS int) end`;
    sql.select = sql.select || [];
    sql.where = sql.where || [];
    sql.having = sql.having || [];
    sql.select.push(`${caseSql} AS ${as}`);
    sql.where.push(`((${field} >= ${extent[0]} AND ${field} <= ${extent[1]}) OR (${field} IS NULL))`);
    sql.having.push(`(${as} >= 0 AND ${as} < ${maxbins}) OR ${as} IS NULL)`);
    return sql;
}
