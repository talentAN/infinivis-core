import { parseExpression } from './parseExpression';
import { parseAggregate } from './parseAggregate';
import { parseBin } from './parseBin';
import { parseSort } from './parseSort';
import { parseLimit } from './parseLimit';
import { parseFilter } from './parseFilter';
import { parseResolvefilter } from './parseResolvefilter';
import { parseCrossfilter } from './parseCrossfilter';
import { parseProject } from './parseProject';
import { parseWith } from './parseWith';
import { parseHaving } from './parseHaving';
import { parseSource } from './parseSource';
import { SQL, Transform, Expression } from '../types';
import { reducer, reduceToString, toSQL } from './reducer';
export declare type TransformParser = (sql: SQL, acc: Transform) => SQL;
export declare type ExpressionParser = (expr: string | Expression) => string;
export declare type expressions = {
    [key: string]: ExpressionParser;
};
export declare type transformers = {
    [key: string]: TransformParser;
};
export declare class SQLParser {
    static registerTransform(type: string, parser: TransformParser): void;
    static registerExpression(type: string, parser: ExpressionParser): void;
    static parseExpression(expression: any): string;
    static parseTransform(sql: SQL, transform: Transform): SQL;
}
export { parseExpression, parseAggregate, parseBin, parseSort, parseLimit, parseFilter, parseResolvefilter, parseCrossfilter, parseProject, parseWith, parseHaving, parseSource, reducer, reduceToString, toSQL, };
//# sourceMappingURL=index.d.ts.map