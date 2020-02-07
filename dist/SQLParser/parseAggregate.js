import { SQLParser } from '.';
function aggregateField(aggFn, field, as) {
    if (aggFn === null) {
        return field;
    }
    const expression = SQLParser.parseExpression({
        type: aggFn,
        field,
    });
    return `${expression} ${as ? `AS ${as}` : ''}`;
}
function _parseGroupBy(sql, groupby) {
    if (typeof groupby === 'string') {
        sql.select = sql.select || [];
        sql.groupby = sql.groupby || [];
        sql.select.push(groupby);
        sql.groupby.push(groupby);
        return sql;
    }
    switch (groupby.type) {
        case 'bin':
            sql = SQLParser.parseTransform(sql, groupby);
            sql.groupby = sql.groupby || [];
            sql.groupby.push(groupby.as);
            break;
        case 'project':
            sql.select = sql.select || [];
            sql.select.push(SQLParser.parseExpression(groupby.expr) +
                (groupby.as ? ' AS ' + groupby.as : ''));
            if (groupby.as) {
                sql.groupby = sql.groupby || [];
                sql.groupby.push(groupby.as);
            }
            break;
        default:
            break;
    }
    return sql;
}
export function parseAggregate(sql, transform) {
    if (transform.type === 'aggregate' && Array.isArray(transform.fields)) {
        if (Array.isArray(transform.groupby)) {
            transform.groupby.forEach((group) => {
                sql = _parseGroupBy(sql, group);
            });
        }
        else {
            sql = _parseGroupBy(sql, transform.groupby);
        }
        transform.fields.forEach((field, index) => {
            const as = transform.as[index];
            sql.select = sql.select || [];
            sql.select.push(aggregateField(transform.ops[index], field, as));
        });
    }
    return sql;
}
