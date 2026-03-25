function classDecorator(constructor: Function) {
    return (function name() {
        return {age: 20}
    }) as any;
}

@classDecorator
class Person {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    fullName(): string {
        return `My name is ${this.firstName} ${this.lastName}`
    }

    printInfo(showShortenedInfo: boolean): void {
        if (showShortenedInfo) {
            console.log(this.firstName, this.lastName);   
        } else {
            console.log(`My name is ${this.firstName} ${this.lastName}`);
        }
    }
}


const personName = new Person('John', 'Doe');
console.log(personName);

// console.log(personName.fullName());
// personName.printInfo(true)




