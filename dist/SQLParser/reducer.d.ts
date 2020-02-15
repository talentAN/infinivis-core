import { SQL, Transform } from '../types';
import { InfiniNode } from '../core';
export declare function reducer<T = Transform>(data: InfiniNode<T>, acc?: SQL): any;
export declare function reduceToString<T>(data: InfiniNode<T>, acc?: SQL): string;
export declare function toSQL(sql: SQL): string;
//# sourceMappingURL=reducer.d.ts.map