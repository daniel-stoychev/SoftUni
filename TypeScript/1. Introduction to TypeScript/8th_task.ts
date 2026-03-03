function isNonEmptyStringArray(param:unknown): param is string[] {
    return Array.isArray(param) && param.length > 0
}


let arr: unknown = ['a', 'b', 'c'];

if(isNonEmptyStringArray(arr)) {

console.log(arr.length); // allowed

}