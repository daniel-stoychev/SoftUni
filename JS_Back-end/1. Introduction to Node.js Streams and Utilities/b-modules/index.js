console.log("Hello!");

// commonJS import statement
// const calculator = require('./calculator');

// ESM module system default import
import calc from "./calculator.js";
import fs from "fs";
import calculator from "calculator";
// import { substract } from "./calculator.js";

const sum = calc.sum(2, 3);

console.log(sum);

// console.log(calc.substract(5, 4));
// console.log(substract(5, 2));

// USING CORE MODULE =========================================
console.log(fs.readdirSync('../'));

// USING THIRD PARTY MODULE =========================================
const f = calculator.func('f(x) = x*10 - 20');

const result = f(10);
console.log(result);
