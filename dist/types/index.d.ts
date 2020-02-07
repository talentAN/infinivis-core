import { InfiniNode } from '../core';
export declare type NotExpression = {
    type: 'not';
    expr: string | BooleanExpression;
};
export declare type AndExpression = {
    type: 'and';
    left: string | BooleanExpression;
    right: string | BooleanExpression;
};
export declare type OrExpression = {
    type: 'or';
    left: string | BooleanExpression;
    right: string | BooleanExpression;
};
export declare type ComparisonOperatorExpression = {
    type: '=' | '<>' | '<' | '>' | '<=' | '>=';
    left: string | number;
    right: string | number;
};
export declare type BetweenExpression = {
    type: 'between' | 'not between';
    field: string;
    left: number | string;
    right: number | string;
};
export declare type NullExpression = {
    type: 'is null' | 'is not null';
    field: string;
};
export declare type PatternMatchingExpression = {
    type: 'like' | 'not like' | 'ilike';
    left: string;
    right: string;
};
export declare type InExpression = {
    type: 'in' | 'not in';
    expr: string;
    set: string | Array<string | number>;
};
export declare type CoalesceExpression = {
    type: 'coalesce';
    values: Array<string | null>;
};
export declare type CaseExpression = {
    type: 'case';
    cond: Array<[BooleanExpression | string, string]>;
    else: string;
};
export declare type CastExpresssion = {
    type: 'cast';
    expr: string;
    as: string;
};
export declare type StatisticalValueFunction = {
    type: 'stddev' | 'stddev_pop' | 'stddev_samp' | 'var_pop' | 'var_samp';
    x: string;
};
export declare type StatisticalPairFunction = {
    type: 'corr' | 'covar_pop' | 'covar_samp';
    x: string;
    y: string;
};
export declare type MaxExpression = {
    type: 'max';
    field: string;
    as?: string;
};
export declare type MinExpression = {
    type: 'min';
    field: string;
    as?: string;
};
export declare type UniqueExpression = {
    type: string;
    field?: string;
    as?: string;
    x?: string;
};
export declare type ProjectExpression = {
    type: 'project';
    field: string;
    as?: string;
};
export declare type SumExpression = {
    type: 'sum';
    field: string;
    as?: string;
};
export declare type AvgExpression = {
    type: 'average';
    field: string;
    as?: string;
};
export declare type CountExpression = {
    type: 'count';
    distinct: boolean;
    approx: boolean;
    field: string;
    as?: string;
};
export declare type DateTruncExpression = {
    type: 'date_trunc';
    unit: DateTruncUnits;
    field: string;
};
export declare type ExtractExpression = {
    type: 'extract';
    unit: ExtractUnits;
    field: string;
};
export declare type AliasExpression = {
    expr: string | Expression;
    as: string;
};
export declare type GisMappingExpression = {
    type: 'gis_mapping';
    domainEnd: number;
    field: string;
    domainStart: number;
    range: number;
};
export declare type GisTransScaleExpression = {
    type: 'gis_trans';
    domain: [number, number];
    field: string;
    width?: number;
    height?: number;
    range: number;
};
export declare type GisInCircleExpression = {
    type: 'in_circle';
    fromlat: string;
    distance: number;
    tolon: string;
    tolat: string;
};
export declare type TimeFunctionExpression = DateTruncExpression | ExtractExpression;
export declare type AggregateFunctionExpression = MaxExpression | MinExpression | UniqueExpression | SumExpression | AvgExpression | CountExpression;
export declare type StatisticalFunctionExpression = StatisticalValueFunction | StatisticalPairFunction;
export declare type ConditionalExpression = CaseExpression | CoalesceExpression;
export declare type LogicalExpression = NotExpression | AndExpression | OrExpression;
export declare type ComparisonExpression = ComparisonOperatorExpression | BetweenExpression | NullExpression;
export declare type BooleanExpression = ComparisonExpression | LogicalExpression | ConditionalExpression | InExpression;
export declare type Expression = LogicalExpression | ComparisonExpression | InExpression | ConditionalExpression | CastExpresssion | StatisticalFunctionExpression | AggregateFunctionExpression | PatternMatchingExpression | TimeFunctionExpression | ProjectExpression | GisMappingExpression | GisTransScaleExpression | GisInCircleExpression;
export declare type JoinRelation = 'join' | 'join.inner' | 'join.left' | 'join.right';
export declare type SortOrder = 'ascending' | 'descending' | 'asc' | 'desc';
export declare type ExtractUnits = 'year' | 'quarter' | 'month' | 'dom' | 'dow' | 'hour' | 'minute';
export declare type DateTruncUnits = 'decade' | 'year' | 'quarter' | 'month' | 'week' | 'day' | 'hour';
export declare type Aggregation = 'average' | 'count' | 'min' | 'max' | 'sum' | 'unique';
export declare type Condition = 'between' | 'not between' | 'null' | 'not null' | 'equals' | 'not equals' | 'greater than or equals' | 'less than or equals' | 'equals' | 'not equals';
export declare type Bin = {
    type: 'bin';
    field: string;
    extent: Array<number>;
    maxbins: number;
    as: string;
};
export declare type With = {
    type: 'with';
    data: InfiniNode<Transform>;
    as?: string;
};
export declare type Limit = {
    type: 'limit';
    limit: number;
    offset?: number;
};
export declare type Sort = {
    type: 'sort';
    field: Array<string>;
    order?: Array<SortOrder>;
};
export declare type Filter = {
    type: 'filter';
    expr: any;
};
export declare type Having = {
    type: 'having';
    expr: string | Expression;
};
export declare type Project = {
    type: 'project';
    expr: string | Expression;
    as?: string;
};
export declare type Join = {
    type: JoinRelation;
    on?: Filter | Array<Filter>;
    as?: string;
};
export declare type Source = {
    type: 'source';
    source: string | Array<Join | Scan | InfiniNode<Transform>>;
};
export declare type Scan = {
    type: 'scan';
    table: string;
};
export declare type Crossfilter = {
    type: 'crossfilter';
    signal: string;
    filter: {
        [key: string]: Filter;
    };
};
export declare type Aggregate = {
    type: 'aggregate';
    fields: Array<string>;
    ops: Array<Aggregation>;
    as: Array<string>;
    groupby: Array<string | Project | Bin> | string | Project | Bin;
};
export declare type ResolveFilter = {
    type: 'resolvefilter';
    filter: {
        signal: string;
    };
    ignore?: Array<string | number> | string | number;
};
export declare type Transform = Aggregate | Bin | Sort | Limit | Filter | Project | Crossfilter | With | Having | ResolveFilter | Source;
export declare type SQL = {
    select?: Array<string>;
    from?: string;
    where?: Array<string>;
    groupby?: Array<string>;
    having?: Array<string>;
    orderby?: Array<string>;
    limit?: number;
    offset?: number;
    unresolved?: {
        [key: string]: ResolveFilter;
    };
    with?: Array<any>;
};
//# sourceMappingURL=index.d.ts.map