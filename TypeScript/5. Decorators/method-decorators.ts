class Num {
    constructor(private _number: number) {}

    @add10
    getNumber() {
        return this._number;
    }
}

function add10(target: Object, key: string, descriptor: PropertyDescriptor) {
    console.log(descriptor);
    
}

const num = new Num(10);

console.log(num.getNumber());
