import { reduceToString } from './reducer';
export function parseWith(sql, transform) {
    if (!transform ||
        transform.type !== 'with' ||
        typeof transform.data === 'undefined') {
        return sql;
    }
    const subQuery = reduceToString(transform.data);
    sql.with = sql.with || [];
    sql.with.push(subQuery ? { as: transform.as, subQuery } : '');
    return sql;
}
