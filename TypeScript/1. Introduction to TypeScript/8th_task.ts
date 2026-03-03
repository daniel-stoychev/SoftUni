function isNonEmptyStringArray(param:unknown): param is string[] {
    return Array.isArray(param) && param.length > 0 && param.every(el => typeof el === 'string');
}


let arr: unknown = ['test', '123'];

if(isNonEmptyStringArray(arr)) {

console.log(arr.length); // allowed

}