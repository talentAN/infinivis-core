import { AliasExpression, AvgExpression, MaxExpression, MinExpression, SumExpression, CountExpression, ExtractExpression, DateTruncExpression, CaseExpression, NotExpression, BetweenExpression, ExtractUnits, DateTruncUnits } from '../types';
export declare const alias: (as: string, expr: string | import("../types").ComparisonOperatorExpression | BetweenExpression | import("../types").NullExpression | NotExpression | import("../types").AndExpression | import("../types").OrExpression | CaseExpression | import("../types").CoalesceExpression | import("../types").InExpression | import("../types").PatternMatchingExpression | import("../types").CastExpresssion | import("../types").StatisticalValueFunction | import("../types").StatisticalPairFunction | MaxExpression | MinExpression | import("../types").UniqueExpression | import("../types").ProjectExpression | SumExpression | AvgExpression | CountExpression | DateTruncExpression | ExtractExpression | import("../types").GisMappingExpression | import("../types").GisTransScaleExpression | import("../types").GisInCircleExpression) => AliasExpression;
export declare const avg: (alias: string, field: string) => AvgExpression;
export declare const min: (alias: string, field: string) => MinExpression;
export declare const max: (alias: string, field: string) => MaxExpression;
export declare const sum: (alias: string, field: string) => SumExpression;
export declare const count: (distinct: boolean, alias: string, field: string) => CountExpression;
export declare const approxCount: (distinct: boolean, alias: string, field: string) => CountExpression;
export declare const countStar: (alias: string) => CountExpression;
export declare const extract: (unit: ExtractUnits, field: string) => ExtractExpression;
export declare const dateTrunc: (unit: DateTruncUnits, field: string) => DateTruncExpression;
export declare const inExpr: (expr: string, set: any) => {
    type: string;
    expr: string;
    set: any;
};
export declare const not: (expr: string | import("../types").ComparisonOperatorExpression | BetweenExpression | import("../types").NullExpression | NotExpression | import("../types").AndExpression | import("../types").OrExpression | CaseExpression | import("../types").CoalesceExpression | import("../types").InExpression) => NotExpression;
export declare const caseExpr: (cond: [string | import("../types").ComparisonOperatorExpression | BetweenExpression | import("../types").NullExpression | NotExpression | import("../types").AndExpression | import("../types").OrExpression | CaseExpression | import("../types").CoalesceExpression | import("../types").InExpression, string][], end: string) => CaseExpression;
export declare const between: (field: string, range: (string | number)[]) => BetweenExpression;
//# sourceMappingURL=expression-builders.d.ts.map