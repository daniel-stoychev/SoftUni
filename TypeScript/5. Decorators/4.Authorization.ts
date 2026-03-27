export

function checkIfAllowed(service: MockAuthrizationService) {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const originalGet = descriptor.get;
        descriptor.get = function () {
            if (!service.canViewData(key)) {
                throw new Error("ou are not authorized to view this information");           
            }
            const result = originalGet?.call(this);
            return result;
        }


        return descriptor;
    }
}

class MockAuthrizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {
    switch (this.userRole) {
        case 'Admin': return true;
        case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
        default: return false;
        }
    }
}
let mockAuthorizationService = new MockAuthrizationService('Admin');
class User {
    constructor(private _name: string, private _age: number, private _creditCardNumber: string) {}

    @checkIfAllowed(mockAuthorizationService)
    public get name() : string {
        return this._name;
    }
    @checkIfAllowed(mockAuthorizationService)
    public get age() : number {
        return this._age;
    }
    @checkIfAllowed(mockAuthorizationService)
    public get creditCardNumber() : string {
        return this._creditCardNumber;
    }
}


const user1 = new User("John Doe", 30, 'ABCD-1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);