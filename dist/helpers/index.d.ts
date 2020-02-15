declare const _default: {
    helpers: {
        project: (expr: string | {
            expr: string | import("..").ComparisonOperatorExpression | import("..").BetweenExpression | import("..").NullExpression | import("..").NotExpression | import("..").AndExpression | import("..").OrExpression | import("..").CaseExpression | import("..").CoalesceExpression | import("..").InExpression | import("..").PatternMatchingExpression | import("..").CastExpresssion | import("..").StatisticalValueFunction | import("..").StatisticalPairFunction | import("..").MaxExpression | import("..").MinExpression | import("..").UniqueExpression | import("..").ProjectExpression | import("..").SumExpression | import("..").AvgExpression | import("..").CountExpression | import("..").DateTruncExpression | import("..").ExtractExpression | import("..").GisMappingExpression | import("..").GisTransScaleExpression | import("..").GisInCircleExpression;
            as: string;
        }) => import("..").Project;
        getAggs: (agg: any) => {
            fields: any[];
            ops: any[];
            as: any[];
        };
        getGroupBy: (groupby: any) => any;
        aggregate: (groupby: string | import("..").AliasExpression | import("..").AliasExpression[], agg: import("..").MaxExpression | import("..").MinExpression | import("..").UniqueExpression | import("..").SumExpression | import("..").AvgExpression | import("..").CountExpression | import("..").AggregateFunctionExpression[]) => import("..").Aggregate;
        filter: (expr: string | import("..").ComparisonOperatorExpression | import("..").BetweenExpression | import("..").NullExpression | import("..").NotExpression | import("..").AndExpression | import("..").OrExpression | import("..").CaseExpression | import("..").CoalesceExpression | import("..").InExpression | import("..").PatternMatchingExpression | import("..").CastExpresssion | import("..").StatisticalValueFunction | import("..").StatisticalPairFunction | import("..").MaxExpression | import("..").MinExpression | import("..").UniqueExpression | import("..").ProjectExpression | import("..").SumExpression | import("..").AvgExpression | import("..").CountExpression | import("..").DateTruncExpression | import("..").ExtractExpression | import("..").GisMappingExpression | import("..").GisTransScaleExpression | import("..").GisInCircleExpression, id?: string) => import("..").Filter;
        filterRange: (field: string, range: (string | number)[], id?: string) => import("..").Filter;
        filterIn: (field: string, set: (string | number)[], id?: string) => import("..").Filter;
        bin: (alias: string, field: string, extent: number[], maxbins: number) => import("..").Bin;
        limit: (limit: number, offset?: number) => import("..").Limit;
        sort: (field: string | string[], order: "ascending" | "descending" | "asc" | "desc" | import("..").SortOrder[]) => import("..").Sort;
        top: (field: string, limit: number, offset?: number) => [import("..").Sort, import("..").Limit];
        bottom: (field: string, limit: number, offset?: number) => [import("..").Sort, import("..").Limit];
        alias: (as: string, expr: string | import("..").ComparisonOperatorExpression | import("..").BetweenExpression | import("..").NullExpression | import("..").NotExpression | import("..").AndExpression | import("..").OrExpression | import("..").CaseExpression | import("..").CoalesceExpression | import("..").InExpression | import("..").PatternMatchingExpression | import("..").CastExpresssion | import("..").StatisticalValueFunction | import("..").StatisticalPairFunction | import("..").MaxExpression | import("..").MinExpression | import("..").UniqueExpression | import("..").ProjectExpression | import("..").SumExpression | import("..").AvgExpression | import("..").CountExpression | import("..").DateTruncExpression | import("..").ExtractExpression | import("..").GisMappingExpression | import("..").GisTransScaleExpression | import("..").GisInCircleExpression) => import("..").AliasExpression;
        avg: (alias: string, field: string) => import("..").AvgExpression;
        min: (alias: string, field: string) => import("..").MinExpression;
        max: (alias: string, field: string) => import("..").MaxExpression;
        sum: (alias: string, field: string) => import("..").SumExpression;
        count: (distinct: boolean, alias: string, field: string) => import("..").CountExpression;
        approxCount: (distinct: boolean, alias: string, field: string) => import("..").CountExpression;
        countStar: (alias: string) => import("..").CountExpression;
        extract: (unit: import("..").ExtractUnits, field: string) => import("..").ExtractExpression;
        dateTrunc: (unit: import("..").DateTruncUnits, field: string) => import("..").DateTruncExpression;
        inExpr: (expr: string, set: any) => {
            type: string;
            expr: string;
            set: any;
        };
        not: (expr: string | import("..").ComparisonOperatorExpression | import("..").BetweenExpression | import("..").NullExpression | import("..").NotExpression | import("..").AndExpression | import("..").OrExpression | import("..").CaseExpression | import("..").CoalesceExpression | import("..").InExpression) => import("..").NotExpression;
        caseExpr: (cond: [string | import("..").ComparisonOperatorExpression | import("..").BetweenExpression | import("..").NullExpression | import("..").NotExpression | import("..").AndExpression | import("..").OrExpression | import("..").CaseExpression | import("..").CoalesceExpression | import("..").InExpression, string][], end: string) => import("..").CaseExpression;
        between: (field: string, range: (string | number)[]) => import("..").BetweenExpression;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map