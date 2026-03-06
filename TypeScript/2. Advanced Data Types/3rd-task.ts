function optionalMultiplier(
    param1?: string | number,
    param2?: string | number,
    param3?: string | number) {
        let realValues = [param1, param2, param3]
        .filter(param => param !== undefined)
        .map(param => Number(param))
        if (realValues.length === 0) {
            return 1;
        }

        return realValues.reduce((acc, val) => acc * val);
}


console.log(optionalMultiplier(3, undefined, 2));
console.log(optionalMultiplier(3, '3', 2));
console.log(optionalMultiplier('3', 5, '10'));
console.log(optionalMultiplier());
