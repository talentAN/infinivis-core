import { reducer } from './reducer';

type Expression = { [propName: string]: any };
function _escapeQuotes(string: string) {
  if (typeof string === 'string') {
    return string.replace(/'/gi, "''");
  } else {
    return string;
  }
}
function _flatExpression(key: string, expression: Expression) {
  return typeof expression[key] === 'string'
    ? `'${expression[key]}'`
    : expression[key];
}

export function parseExpression(expression: any): string {
  if (typeof expression === 'string') {
    return expression;
  }
  if (expression === null) {
    return 'NULL';
  }
  switch (expression.type) {
    // 'project means no expression type is involved in
    case 'project':
      return `${expression.field}`;
    // Date Functions
    case 'age':
      expression.end = expression.end ? `${expression.end}, ` : '';
      return `age(${expression.end} ${expression.start})`;
    case 'date_trunc':
      return `date_trunc('${expression.unit}', ${expression.field})`;
    case 'extract':
      return `extract(${expression.unit} from ${expression.field})`;
    // Aggregate Functions
    case 'count':
      return expression.distinct
        ? `count(distinct ${expression.field})`
        : `count(${expression.field})`;
    case 'avg':
    case 'min':
    case 'max':
    case 'sum':
      return `${expression.type}(${expression.field})`;
    // String Functions TODO:
    // Math Functions
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
    case 'stddev':
    case 'stddev_pop':
    case 'stddev_samp':
    case 'var_pop':
    case 'var_samp':
      return `${expression.type}(${parseExpression(expression.expr)})`;
    case 'sqrt':
    case 'sample':
    case 'bool_and':
    case 'bool_or':
    case 'bit_and':
    case 'bit_or':
    case 'array_agg':
    case 'string_agg':
    case 'every':
      return `${expression.type}(${expression.field})`;
    // CONDITIONS
    case '=':
    case '<>':
    case '<':
    case '>':
    case '<=':
    case '>=':
      expression.right = _flatExpression('right', expression);
      return `${expression.left} ${expression.type} ${expression.right}`;
    case 'between':
    case 'not between':
      expression.left = _flatExpression('left', expression);
      expression.right = _flatExpression('right', expression);
      return `${expression.field} ${expression.type.toUpperCase()} ${
        expression.left
      } AND ${expression.right}`;
    case 'is null':
    case 'is not null':
      return `${expression.field} ${expression.type.toUpperCase()}`;
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
              typeof field === 'number' ? field : `'${_escapeQuotes(field)}'`
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
    // Pattern Matching
    case 'ilike':
    case 'like':
    case 'not like':
      return `${expression.left} ${expression.type.toUpperCase()} '%${
        expression.right
      }%'`;
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
    case 'root':
      return `(${reducer(expression)})`;
    // Postgis related
    //TODO: what if tranfrom and special SRID
    case 'st_astext':
    case 'st_asbinary':
    case 'st_geomfromwkb':
    case 'st_geometryfromtext':
    case 'st_length':
    case 'st_perimeter':
    case 'st_area':
      return `${expression.type.toUpperCase()}(${expression.field})`;
    case 'st_distance':
    case 'st_dwithin':
      expression.from =
        expression.from.type === 'const'
          ? `'${expression.from.field}'`
          : expression.from.field;
      expression.to =
        expression.to.type === 'const'
          ? `'${expression.to.field}'`
          : expression.to.field;
      return `${expression.type.toUpperCase()}(${expression.from}, ${
        expression.to
      })`;
    default:
      return expression;
  }
}
