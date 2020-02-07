export function parseLimit(sql, transform) {
    if (transform.type !== 'limit') {
        return sql;
    }
    sql.limit = sql.limit || 0;
    sql.offset = sql.offset || 0;
    sql.limit += transform.limit;
    sql.offset += transform.offset || sql.offset;
    return sql;
}
