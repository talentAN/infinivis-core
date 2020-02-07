import { SQLParser } from '.';
export function parseProject(sql, transform) {
    if (transform.type !== 'project') {
        return sql;
    }
    sql.select = sql.select || [];
    sql.select.push(SQLParser.parseExpression(transform.expr) +
        (transform.as ? ' AS ' + transform.as : ''));
    return sql;
}
