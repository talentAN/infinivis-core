export const project = (expr) => ({
    type: 'project',
    expr: typeof expr === 'string' ? expr : expr.expr,
    as: typeof expr === 'string' ? undefined : expr.as,
});
export const getAggs = (agg) => {
    if (Array.isArray(agg)) {
        return {
            fields: agg.map(a => a.field),
            ops: agg.map(a => a.type),
            as: agg.map(a => a.as),
        };
    }
    else {
        return {
            fields: [agg.field],
            ops: [agg.type],
            as: [agg.as || ''],
        };
    }
};
export const getGroupBy = (groupby) => {
    if (Array.isArray(groupby)) {
        return groupby.map(group => {
            if (typeof group === 'object') {
                return {
                    type: 'project',
                    expr: group.expr,
                    as: group.as,
                };
            }
            else {
                return group;
            }
        });
    }
    else if (typeof groupby === 'object') {
        return {
            type: 'project',
            expr: groupby.expr,
            as: groupby.as,
        };
    }
    else {
        return groupby;
    }
};
export const aggregate = (groupby, agg) => {
    const aggs = getAggs(agg);
    const group = getGroupBy(groupby);
    return {
        type: 'aggregate',
        fields: aggs.fields,
        ops: aggs.ops,
        as: aggs.as,
        groupby: group,
    };
};
export const filter = (expr, id = '') => ({
    type: 'filter',
    expr,
});
export const filterRange = (field, range, id = '') => ({
    type: 'filter',
    expr: {
        type: 'between',
        field,
        left: range[0],
        right: range[1],
    },
});
export const filterIn = (field, set, id = '') => ({
    type: 'filter',
    expr: {
        type: 'in',
        expr: field,
        set,
    },
});
export const bin = (alias, field, extent, maxbins) => ({
    type: 'bin',
    field,
    extent,
    maxbins,
    as: alias,
});
export const limit = (limit, offset) => ({
    type: 'limit',
    limit,
    offset,
});
export const sort = (field, order) => ({
    type: 'sort',
    field: typeof field === 'string' ? [field] : field,
    order: typeof order === 'string' ? [order] : order,
});
export const top = (field, limit, offset) => [
    {
        type: 'sort',
        field: [field],
        order: ['descending'],
    },
    {
        type: 'limit',
        limit: limit,
        offset,
    },
];
export const bottom = (field, limit, offset) => [
    {
        type: 'sort',
        field: [field],
        order: ['ascending'],
    },
    {
        type: 'limit',
        limit: limit,
        offset,
    },
];
