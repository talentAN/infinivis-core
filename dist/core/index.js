export class InfiniCollection {
    constructor(params) {
        this.children = [];
        this.reducer = params.reducer;
        this.stringify = params.stringify;
    }
    create(source, transform) {
        const node = new InfiniNode({
            type: 'root',
            source: source,
            transform: transform,
            reducer: this.reducer,
            stringify: this.stringify,
        });
        this.appendChild(node);
        return node;
    }
    appendChild(child) {
        this.children.push(child);
        return child;
    }
    setTransform(setter) {
        this.children.forEach(child => child.setTransform(setter));
        return this.children.map(child => child.transform);
    }
}
export class InfiniNode {
    constructor(params) {
        this._transform = params.transform || [];
        this.type = params.type || 'node';
        this.source = params.source;
        this.children = params.children || [];
        this.reducer = params.reducer;
        this.stringify = params.stringify;
    }
    setTransform(setter) {
        this.transform = setter(this.transform);
    }
    set transform(transform) {
        this._transform = transform;
    }
    get transform() {
        return this._transform;
    }
    add(params) {
        const child = new InfiniNode({
            type: 'node',
            source: this,
            transform: params.transform || [],
            children: params.children || [],
            reducer: this.reducer,
            stringify: this.stringify,
        });
        this.appendChild(child);
        return child;
    }
    appendChild(child) {
        this.children.push(child);
        child.source = this;
        return child;
    }
    reduce(node = this, acc) {
        if (this.type !== 'root') {
            const source = this.source;
            const _acc = this.reducer(this, acc);
            return source.reduce(node, _acc);
        }
        return this.reducer(this, acc);
    }
    reduceToString() {
        return this.stringify(this.reduce());
    }
}
