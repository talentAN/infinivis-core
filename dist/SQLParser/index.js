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
import { reducer, reduceToString, toSQL } from './reducer';
let expressions = {};
let transformers = {
    aggregate: parseAggregate,
    bin: parseBin,
    source: parseSource,
    sort: parseSort,
    limit: parseLimit,
    filter: parseFilter,
    having: parseHaving,
    project: parseProject,
    resolvefilter: parseResolvefilter,
    crossfilter: parseCrossfilter,
    with: parseWith,
};
class SQLParser {
    static registerTransform(type, parser) {
        transformers[type] = parser;
    }
    static registerExpression(type, parser) {
        expressions[type] = parser;
    }
    static parseExpression(expression) {
        if (typeof expressions[expression.type] !== 'undefined') {
            return expressions[expression.type](expression);
        }
        return parseExpression(expression);
    }
    static parseTransform(sql, transform) {
        if (typeof transformers[transform.type] !== 'undefined') {
            return transformers[transform.type](sql, transform);
        }
        return sql;
    }
}
export { SQLParser, parseExpression, parseAggregate, parseBin, parseSort, parseLimit, parseFilter, parseResolvefilter, parseCrossfilter, parseProject, parseWith, parseHaving, parseSource, reducer, reduceToString, toSQL, };
