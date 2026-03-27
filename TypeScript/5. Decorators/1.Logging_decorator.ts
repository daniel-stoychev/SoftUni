export 

function log(target: Object, key: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        console.log(`Function ${key} called with arguments: ${args.join(', ')}`);
        let result = originalMethod.call(this, ...args);
        return result;
    }
    
    return descriptor;
}

class Person {

    constructor(public fName: string, public lName: string) {}

    @log
    static getFullName (fName: string, lName: string): string {
        
        return `${fName}, ${lName}`
    }
}


let person = new Person('John', 'Does');
Person.getFullName(person.fName, person.lName)
Person.getFullName('Benny', 'Tres');
// console.log(Person.getFullName('John', 'Doe'));