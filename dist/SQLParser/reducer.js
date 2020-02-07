import { SQLParser } from '.';
export function reducer(data, acc = {}) {
    let transform = [...data.transform];
    if (typeof data.source !== 'undefined') {
        let source = data.source;
        while (typeof source !== 'string') {
            source = source.source;
        }
        transform.push({ source: source, type: 'source' });
    }
    return transform.reduce((acc, currentTransform) => SQLParser.parseTransform(acc, currentTransform), acc);
}
export function reduceToString(data, acc = {}) {
    return toSQL(reducer(data, acc));
}
export function toSQL(sql) {
    return (writeWith(sql.with || []) +
        writeSelect(sql.select) +
        writeFrom(sql.from) +
        writeWhere(sql.where) +
        writeGroupby(sql.groupby) +
        writeHaving(sql.having) +
        writeOrderBy(sql.orderby) +
        writeLimit(sql.limit) +
        writeOffset(sql.offset));
}
function writeSelect(select = []) {
    return select.length ? 'SELECT ' + select.join(', ') : 'SELECT *';
}
function writeFrom(from = '') {
    return ' FROM ' + from;
}
function writeWhere(where = []) {
    return where.length ? ' WHERE ' + where.join(' AND ') : '';
}
function writeGroupby(groupby = []) {
    return groupby.length ? ' GROUP BY ' + groupby.join(', ') : '';
}
function writeHaving(having = []) {
    return having.length ? ' HAVING ' + having.join(' AND ') : '';
}
function writeOrderBy(orderby = []) {
    return orderby.length ? ' ORDER BY ' + orderby.join(', ') : '';
}
function writeLimit(limit = 0) {
    return limit > 0 ? ' LIMIT ' + limit : '';
}
function writeOffset(offset = 0) {
    return offset > 0 ? ' OFFSET ' + offset : '';
}
function writeWith(With = []) {
    return With && With.length
        ? 'WITH ' + With[0].name + ' AS (' + With[0].subQuery + ') '
        : '';
}
