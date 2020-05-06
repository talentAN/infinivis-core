import { reducer } from './reducer';

function escapeQuotes(string: string) {
  if (typeof string === 'string') {
    return string.replace(/'/gi, "''");
  } else {
    return string;
  }
}

export function parseExpression(expression: any): string {
  if (typeof expression === 'string') {
    return expression;
  }
  if (expression === null) {
    return 'NULL';
  }
  switch (expression.type) {
    case '=':
    case '<>':
    case '<':
    case '>':
    case '<=':
    case '>=':
      return `${expression.left} ${expression.type} ${
        typeof expression.right === 'string'
          ? `'${expression.right}'`
          : expression.right
      }`;
    case 'between':
    case 'not between':
      return `${expression.field} ${expression.type.toUpperCase()} ${
        typeof expression.left === 'string'
          ? `'${expression.left}'`
          : expression.left
      } AND ${
        typeof expression.right === 'string'
          ? `'${expression.right}'`
          : expression.right
      }`;
    case 'is null':
    case 'is not null':
      return `${expression.field} ${expression.type.toUpperCase()}`;
    case 'ilike':
    case 'like':
    case 'not like':
      return `${expression.left} ${expression.type.toUpperCase()} '%${
        expression.right
      }%'`;
    case 'coalesce':
      return `COALESCE(${expression.values
        .map((field: string) => parseExpression(field))
        .join(', ')})`;
    case 'in':
    case 'not in':
      if (Array.isArray(expression.set)) {
        return (
          expression.expr +
          ' ' +
          expression.type.toUpperCase() +
          ' (' +
          expression.set
            .map((field: number | string) =>
              typeof field === 'number' ? field : `'${escapeQuotes(field)}'`
            )
            .join(', ') +
          ')'
        );
      } else if (
        typeof expression.set === 'object' &&
        (expression.set.type === 'data' || expression.set.type === 'root')
      ) {
        return (
          expression.expr +
          ' ' +
          expression.type.toUpperCase() +
          ' (' +
          reducer(expression.set) +
          ')'
        );
      } else {
        return expression;
      }
    case 'not':
      return `NOT(${parseExpression(expression.expr)})`;
    case 'and':
    case 'or':
      return `(${parseExpression(
        expression.left
      )} ${expression.type.toUpperCase()} ${parseExpression(
        expression.right
      )})`;
    case 'case':
      const elseCase =
        expression.else === null ? 'NULL' : `'${expression.else}'`;
      return (
        'CASE WHEN ' +
        expression.cond
          .map((cond: any) => parseExpression(cond[0]) + ' THEN ' + cond[1])
          .join(' ') +
        (typeof expression.else !== 'undefined' ? ` ELSE ${elseCase}` : '') +
        ' END'
      );
    case 'date_trunc':
      return `date_trunc('${expression.unit}', ${expression.field})`;
    case 'extract':
      return `extract(${expression.unit} from ${expression.field})`;
    case 'root':
      return `(${reducer(expression)})`;
    case 'count':
      if (expression.distinct && expression.approx) {
        return `approx_count_distinct(${expression.field})`;
      } else if (expression.distinct) {
        return `count(distinct ${expression.field})`;
      } else {
        return `count(${expression.field})`;
      }
    case 'unique':
      return `count(distinct ${expression.field})`;
    case 'stddev':
    case 'stddev_pop':
    case 'stddev_samp':
    case 'var_pop':
    case 'var_samp':
      return `${expression.type}(${parseExpression(expression.expr)})`;
    case 'corr':
    case 'covar_pop':
    case 'covar_samp':
    case 'regr_avgx':
    case 'regr_avgy':
    case 'regr_count':
    case 'regr_intercept':
    case 'regr_r2':
    case 'regr_slope':
    case 'regr_sxx':
    case 'regr_sxy':
    case 'regr_syy':
      return `${expression.type}(${expression.y}, ${expression.x})`;
    case 'avg':
    case 'min':
    case 'max':
    case 'sum':
    case 'sample':
    case 'bool_and':
    case 'bool_or':
    case 'bit_and':
    case 'bit_or':
    case 'every':
      return `${expression.type}(${expression.field})`;
    case 'st_distance':
      return `ST_Distance (ST_Transform (ST_Point (${expression.tolon}, ${expression.tolat}), 'epsg:4326', 'epsg:3857'), ST_Transform( 'point(${expression.fromlon} ${expression.fromlat})', 'epsg:4326', 'epsg:3857')) < ${expression.distance}`;
    case 'st_within':
      const polygon = expression.px
        .map((x: any, index: number) => `${x} ${expression.py[index]}`)
        .join(', ');
      return `ST_Within (ST_Point (${expression.x}, ${expression.y}), 'POLYGON ((${polygon}))')`;
    case 'project':
      return `${expression.field}`;
    default:
      return expression;
  }
}
