function summarizedPerson(
    id: number,
    firstName: string,
    lastName: string, 
    age: number,
    middleName?: string,
    hobbies?: string[],
    workinfo?: [string, number]
):[number, string, number, string, string] {
    
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const hobbiesResult = hobbies && hobbies.length >=1 ? 
    hobbies.join(', ') :
    ' - ';
    const workInfoResult = workinfo && workinfo.length > 0 ?
    `${workinfo[0]} -> ${workinfo[1]}`:
    ' - ';

    return [id, fullName, age, hobbiesResult, workInfoResult]

}

console.log(summarizedPerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizedPerson(21, 'Joseph', 'Angler', 28));
