function operations(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    switch (operator) {
        case "+":
            if ((N1 + N2) % 2 == 0) {
                console.log(`${N1} ${operator} ${N2} = ${N1 + N2} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${N1 + N2} - odd`);
            }
            break;
        case "-":
            if ((N1 - N2) % 2 == 0) {
                console.log(`${N1} ${operator} ${N2} = ${N1 - N2} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${N1 - N2} - odd`);
            }
            break;
        case "*":
            if ((N1 * N2) % 2 == 0) {
                console.log(`${N1} ${operator} ${N2} = ${N1 * N2} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${N1 * N2} - odd`);
            }
            break;
        case "/":
            if (N2 == 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${(N1 / N2).toFixed(2)}`);
            }
            break;
        case "%":
            if (N2 == 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${N1 % N2}`);
            }

            break;
    }

}

// function operations(input) {
//     let N1 = Number(input[0]);
//     let N2 = Number(input[1]);
//     let operator = input[2];

//     let result = 0;
//     let evenOrOdd;

//     switch (operator) {
//         case "+":
//             result = N1 + N2;
//             if (result % 2 === 0) {
//                 evenOrOdd = "even";
//             } else {
//                 evenOrOdd = "odd"
//             }
//             console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOrOdd}`);
//             break;
//         case "-":
//             result = N1 - N2;
//             if (result % 2 === 0) {
//                 evenOrOdd = "even";
//             } else {
//                 evenOrOdd = "odd"
//             }
//             console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOrOdd}`);
//             break;
//         case "*":
//             result = N1 * N2;
//             if (result % 2 === 0) {
//                 evenOrOdd = "even";
//             } else {
//                 evenOrOdd = "odd"
//             }
//             console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOrOdd}`);
//             break;
//         case "/":
//             result = N1 / N2;
//             if (N2 === 0) {
//                 console.log(`Cannot divide ${N1} by zero`);
//             } else {
//                 console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);
//             }
//             break;
//         case "%":
//             result = N1 % N2;
//             if (N2 === 0) {
//                 console.log(`Cannot divide ${N1} by zero`);
//             } else {
//                 console.log(`${N1} ${operator} ${N2} = ${result}`);
//             }

//             break;
//     }

// }

operations(["7", "3", "*"]);
