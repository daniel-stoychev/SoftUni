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
}


const personName = new Person('John', 'Doe');

console.log(personName.fullName());
