export const alias = (as, expr) => ({
    expr,
    as,
});
export const avg = (alias, field) => ({
    type: 'average',
    field,
    as: alias,
});
export const min = (alias, field) => ({
    type: 'min',
    field,
    as: alias,
});
export const max = (alias, field) => ({
    type: 'max',
    field,
    as: alias,
});
export const sum = (alias, field) => ({
    type: 'sum',
    field,
    as: alias,
});
export const count = (distinct, alias, field) => ({
    type: 'count',
    distinct,
    approx: false,
    field,
    as: alias,
});
export const approxCount = (distinct, alias, field) => ({
    type: 'count',
    distinct,
    approx: true,
    field,
    as: alias,
});
export const countStar = (alias) => ({
    type: 'count',
    distinct: false,
    approx: false,
    field: '*',
    as: alias,
});
export const extract = (unit, field) => ({
    type: 'extract',
    unit,
    field,
});
export const dateTrunc = (unit, field) => ({
    type: 'date_trunc',
    unit,
    field,
});
export const inExpr = (expr, set) => ({
    type: 'in',
    expr,
    set,
});
export const not = (expr) => ({
    type: 'not',
    expr,
});
export const caseExpr = (cond, end) => ({
    type: 'case',
    cond,
    else: end,
});
export const between = (field, range) => ({
    type: 'between',
    field,
    left: range[0],
    right: range[1],
});
