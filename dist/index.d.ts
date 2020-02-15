import * as SqlParser from './SQLParser';
export * from './core';
export * from './types';
declare const Helper: {
    project: (expr: string | {
        expr: string | import("./types").ComparisonOperatorExpression | import("./types").BetweenExpression | import("./types").NullExpression | import("./types").NotExpression | import("./types").AndExpression | import("./types").OrExpression | import("./types").CaseExpression | import("./types").CoalesceExpression | import("./types").InExpression | import("./types").PatternMatchingExpression | import("./types").CastExpresssion | import("./types").StatisticalValueFunction | import("./types").StatisticalPairFunction | import("./types").MaxExpression | import("./types").MinExpression | import("./types").UniqueExpression | import("./types").ProjectExpression | import("./types").SumExpression | import("./types").AvgExpression | import("./types").CountExpression | import("./types").DateTruncExpression | import("./types").ExtractExpression | import("./types").GisMappingExpression | import("./types").GisTransScaleExpression | import("./types").GisInCircleExpression;
        as: string;
    }) => import("./types").Project;
    getAggs: (agg: any) => {
        fields: any[];
        ops: any[];
        as: any[];
    };
    getGroupBy: (groupby: any) => any;
    aggregate: (groupby: string | import("./types").AliasExpression | import("./types").AliasExpression[], agg: import("./types").MaxExpression | import("./types").MinExpression | import("./types").UniqueExpression | import("./types").SumExpression | import("./types").AvgExpression | import("./types").CountExpression | import("./types").AggregateFunctionExpression[]) => import("./types").Aggregate;
    filter: (expr: string | import("./types").ComparisonOperatorExpression | import("./types").BetweenExpression | import("./types").NullExpression | import("./types").NotExpression | import("./types").AndExpression | import("./types").OrExpression | import("./types").CaseExpression | import("./types").CoalesceExpression | import("./types").InExpression | import("./types").PatternMatchingExpression | import("./types").CastExpresssion | import("./types").StatisticalValueFunction | import("./types").StatisticalPairFunction | import("./types").MaxExpression | import("./types").MinExpression | import("./types").UniqueExpression | import("./types").ProjectExpression | import("./types").SumExpression | import("./types").AvgExpression | import("./types").CountExpression | import("./types").DateTruncExpression | import("./types").ExtractExpression | import("./types").GisMappingExpression | import("./types").GisTransScaleExpression | import("./types").GisInCircleExpression, id?: string) => import("./types").Filter;
    filterRange: (field: string, range: (string | number)[], id?: string) => import("./types").Filter;
    filterIn: (field: string, set: (string | number)[], id?: string) => import("./types").Filter;
    bin: (alias: string, field: string, extent: number[], maxbins: number) => import("./types").Bin;
    limit: (limit: number, offset?: number) => import("./types").Limit;
    sort: (field: string | string[], order: "ascending" | "descending" | "asc" | "desc" | import("./types").SortOrder[]) => import("./types").Sort;
    top: (field: string, limit: number, offset?: number) => [import("./types").Sort, import("./types").Limit];
    bottom: (field: string, limit: number, offset?: number) => [import("./types").Sort, import("./types").Limit];
    alias: (as: string, expr: string | import("./types").ComparisonOperatorExpression | import("./types").BetweenExpression | import("./types").NullExpression | import("./types").NotExpression | import("./types").AndExpression | import("./types").OrExpression | import("./types").CaseExpression | import("./types").CoalesceExpression | import("./types").InExpression | import("./types").PatternMatchingExpression | import("./types").CastExpresssion | import("./types").StatisticalValueFunction | import("./types").StatisticalPairFunction | import("./types").MaxExpression | import("./types").MinExpression | import("./types").UniqueExpression | import("./types").ProjectExpression | import("./types").SumExpression | import("./types").AvgExpression | import("./types").CountExpression | import("./types").DateTruncExpression | import("./types").ExtractExpression | import("./types").GisMappingExpression | import("./types").GisTransScaleExpression | import("./types").GisInCircleExpression) => import("./types").AliasExpression;
    avg: (alias: string, field: string) => import("./types").AvgExpression;
    min: (alias: string, field: string) => import("./types").MinExpression;
    max: (alias: string, field: string) => import("./types").MaxExpression;
    sum: (alias: string, field: string) => import("./types").SumExpression;
    count: (distinct: boolean, alias: string, field: string) => import("./types").CountExpression;
    approxCount: (distinct: boolean, alias: string, field: string) => import("./types").CountExpression;
    countStar: (alias: string) => import("./types").CountExpression;
    extract: (unit: import("./types").ExtractUnits, field: string) => import("./types").ExtractExpression;
    dateTrunc: (unit: import("./types").DateTruncUnits, field: string) => import("./types").DateTruncExpression;
    inExpr: (expr: string, set: any) => {
        type: string;
        expr: string;
        set: any;
    };
    not: (expr: string | import("./types").ComparisonOperatorExpression | import("./types").BetweenExpression | import("./types").NullExpression | import("./types").NotExpression | import("./types").AndExpression | import("./types").OrExpression | import("./types").CaseExpression | import("./types").CoalesceExpression | import("./types").InExpression) => import("./types").NotExpression;
    caseExpr: (cond: [string | import("./types").ComparisonOperatorExpression | import("./types").BetweenExpression | import("./types").NullExpression | import("./types").NotExpression | import("./types").AndExpression | import("./types").OrExpression | import("./types").CaseExpression | import("./types").CoalesceExpression | import("./types").InExpression, string][], end: string) => import("./types").CaseExpression;
    between: (field: string, range: (string | number)[]) => import("./types").BetweenExpression;
};
export { SqlParser, Helper };
//# sourceMappingURL=index.d.ts.map