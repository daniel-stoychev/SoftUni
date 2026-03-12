type NameInformation = typeof names
type addressInformation = typeof address

type Person = NameInformation & addressInformation;

function createCombinedFunction(names: NameInformation, address: addressInformation) {

    return function name(person: Person) {
        console.log(`Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`);
        
    }
}

//==========here is Input code for testing==========


let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { 
    return `${this.fName} ${this.lName}, age ${this.age}` } };

let address = { city:'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { 
    return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`} };
    
let combinedFunction = createCombinedFunction(names, address);

let combinedPerson = Object.assign({}, names, address);

combinedFunction(combinedPerson);