type User = {
  id: number | string;
  username: string;
  passwordHash: string | string[];
  status: "Locked" | "Unlocked" | "Deleted";
  email?: string;
};

function vaidUser(obj: object): obj is User {
    const idIsValid = 'id' in obj && (
        (typeof obj.id === 'number' && obj.id > 100) || 
        (typeof obj.id === 'string' && obj.id.length === 14)
    );
    const usernameIsValid = 'username' in obj && 
        typeof obj.username === 'string' && 
        obj.username.length <= 10 && 
        obj.username.length >= 5;
    const passwordHashIsValid = 'passwordHash' in obj &&
        (
            (typeof obj.passwordHash === 'string' && obj.passwordHash.length === 20) ||
            (Array.isArray(obj.passwordHash) && 
            obj.passwordHash.length === 4 && 
            obj.passwordHash.every((el) => el === 'string' && el.length === 8))
        );  
    const hasStatus = 'status' in obj && (
        obj.status === 'Locked' || obj.status === 'Unlocked'
        );

    return idIsValid && usernameIsValid && passwordHashIsValid && hasStatus;
    
}


console.log(vaidUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }))
console.log(vaidUser({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' }))
console.log(vaidUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456',status:'Deleted', email: 'something' }))
console.log(vaidUser({ id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567',status: 'Locked', email: 'something@abv.bg' }))