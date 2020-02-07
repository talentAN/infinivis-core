import { SQLParser } from '.';
export function parseHaving(sql, transform) {
    if (transform.type !== 'having') {
        return sql;
    }
    sql.having = sql.having || [];
    const expr = SQLParser.parseExpression(transform.expr);
    sql.having.push(expr);
    return sql;
}
