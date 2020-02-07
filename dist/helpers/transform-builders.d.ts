import { Project, Aggregate, Filter, Bin, Sort, SortOrder, Limit, AliasExpression, AggregateFunctionExpression } from '../types';
export declare const project: (expr: string | {
    expr: string | import("../types").ComparisonOperatorExpression | import("../types").BetweenExpression | import("../types").NullExpression | import("../types").NotExpression | import("../types").AndExpression | import("../types").OrExpression | import("../types").CaseExpression | import("../types").CoalesceExpression | import("../types").InExpression | import("../types").PatternMatchingExpression | import("../types").CastExpresssion | import("../types").StatisticalValueFunction | import("../types").StatisticalPairFunction | import("../types").MaxExpression | import("../types").MinExpression | import("../types").UniqueExpression | import("../types").ProjectExpression | import("../types").SumExpression | import("../types").AvgExpression | import("../types").CountExpression | import("../types").DateTruncExpression | import("../types").ExtractExpression | import("../types").GisMappingExpression | import("../types").GisTransScaleExpression | import("../types").GisInCircleExpression;
    as: string;
}) => Project;
export declare const getAggs: (agg: any) => {
    fields: any[];
    ops: any[];
    as: any[];
};
export declare const getGroupBy: (groupby: any) => any;
export declare const aggregate: (groupby: string | AliasExpression | AliasExpression[], agg: import("../types").MaxExpression | import("../types").MinExpression | import("../types").UniqueExpression | import("../types").SumExpression | import("../types").AvgExpression | import("../types").CountExpression | AggregateFunctionExpression[]) => Aggregate;
export declare const filter: (expr: string | import("../types").ComparisonOperatorExpression | import("../types").BetweenExpression | import("../types").NullExpression | import("../types").NotExpression | import("../types").AndExpression | import("../types").OrExpression | import("../types").CaseExpression | import("../types").CoalesceExpression | import("../types").InExpression | import("../types").PatternMatchingExpression | import("../types").CastExpresssion | import("../types").StatisticalValueFunction | import("../types").StatisticalPairFunction | import("../types").MaxExpression | import("../types").MinExpression | import("../types").UniqueExpression | import("../types").ProjectExpression | import("../types").SumExpression | import("../types").AvgExpression | import("../types").CountExpression | import("../types").DateTruncExpression | import("../types").ExtractExpression | import("../types").GisMappingExpression | import("../types").GisTransScaleExpression | import("../types").GisInCircleExpression, id?: string) => Filter;
export declare const filterRange: (field: string, range: (string | number)[], id?: string) => Filter;
export declare const filterIn: (field: string, set: (string | number)[], id?: string) => Filter;
export declare const bin: (alias: string, field: string, extent: number[], maxbins: number) => Bin;
export declare const limit: (limit: number, offset?: number) => Limit;
export declare const sort: (field: string | string[], order: "ascending" | "descending" | "asc" | "desc" | SortOrder[]) => Sort;
export declare const top: (field: string, limit: number, offset?: number) => [Sort, Limit];
export declare const bottom: (field: string, limit: number, offset?: number) => [Sort, Limit];
//# sourceMappingURL=transform-builders.d.ts.map