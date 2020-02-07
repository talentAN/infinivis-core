const ORDER_DIRECTIONS = {
    ascending: 'ASC',
    asc: 'ASC',
    descending: 'DESC',
    desc: 'DESC',
    undefined: 'ASC',
};
export function parseSort(sql, transform) {
    if (transform.type !== 'sort') {
        return sql;
    }
    sql.orderby = sql.orderby || [];
    transform.field.forEach((field, index) => {
        sql.orderby.push(field +
            (Array.isArray(transform.order)
                ? ' ' + ORDER_DIRECTIONS[transform.order[index]]
                : ''));
    });
    return sql;
}
