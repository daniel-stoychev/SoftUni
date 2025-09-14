export function substract(a, b) {
    return a - b;
}

const calculator = {
    sum(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    },
    substract,
}

//commonJS export statement
// module.exports = calculator;


//ESM module system default export
export default calculator;