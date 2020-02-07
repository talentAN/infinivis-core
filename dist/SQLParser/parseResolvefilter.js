export function parseResolvefilter(sql, transform) {
    if (transform.type === 'resolvefilter') {
        sql.unresolved = sql.unresolved || {};
        sql.unresolved[transform.filter.signal] = transform;
    }
    return sql;
}
