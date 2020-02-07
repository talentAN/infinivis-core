import { SQLParser } from '.';
const isExpression = (expr) => {
    return Object.prototype.toString.call(expr) === '[object Object]';
};
export function parseFilter(sql, transform) {
    if (transform.type !== 'filter') {
        return sql;
    }
    sql.where = sql.where || [];
    if (transform.type === 'filter') {
        sql.where.push(`(${isExpression(transform.expr)
            ? SQLParser.parseExpression(transform.expr)
            : transform.expr})`);
    }
    return sql;
}
