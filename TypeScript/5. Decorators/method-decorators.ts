class Num {
    constructor(private _number: number) {}

    @add10
    getNumber() {
        return this._number;
    }
}

function add10(target: Object, key: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        let result = originalMethod.call(this, args);
        result += 10;
        return result;
    }

    return descriptor;
    
}

const num = new Num(10);

console.log(num.getNumber());
