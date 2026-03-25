export

function addTitle<T extends new(...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super('Sir/Madam ' + args[0], ...args.slice(1));
        }
    }
}

@addTitle
class Person {
    public name: string
    constructor(name: string) {
        this.name = name
    }
}

let peron = new Person('Ivan');
console.log(peron.name);
