declare type SetTransform<T> = (transform: Array<T>) => Array<T>;
declare type NodeType = 'root' | 'node';
declare type Source<T> = string | InfiniNode<T>;
declare type Reducer<T> = (node: InfiniNode<T>, acc?: any) => any;
declare type Stringify = (t?: any) => string;
export declare type NodeParams<T> = {
    type?: NodeType;
    source?: Source<T>;
    children?: Array<InfiniNode<T>>;
    transform?: Array<T>;
    reducer?: Reducer<T>;
    stringify?: Stringify;
};
export declare class InfiniCollection<T> {
    reducer: Reducer<T>;
    stringify: Stringify;
    children: Array<InfiniNode<T>>;
    constructor(params: {
        reducer: Reducer<T>;
        stringify: Stringify;
    });
    create(source: string): InfiniNode<T>;
    appendChild(child: InfiniNode<T>): InfiniNode<T>;
    setTransform(setter: SetTransform<T>): Array<Array<T>>;
}
export declare class InfiniNode<T> {
    type: NodeType;
    source: Source<T>;
    reducer: Reducer<T>;
    stringify: Stringify;
    children: Array<InfiniNode<T>>;
    protected _transform: Array<T>;
    setTransform(setter: SetTransform<T>): void;
    set transform(transform: Array<T>);
    get transform(): Array<T>;
    constructor(params: NodeParams<T>);
    add(params: NodeParams<T>): InfiniNode<T>;
    appendChild(child: InfiniNode<T>): InfiniNode<T>;
    reduce(node?: InfiniNode<T>, acc?: any): any;
    reduceToString(): string;
}
export {};
//# sourceMappingURL=index.d.ts.map