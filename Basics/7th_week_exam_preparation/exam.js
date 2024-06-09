function exam(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);

    for (let digit1 = 2; digit1 <= firstNum; digit1 += 2) {
        for (let digit2 = 2; digit2 <= secondNum; digit2++) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(digit2); i++) {
                if (digit2 % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                for (let digit3 = 2; digit3 <= thirdNum; digit3 += 2) {
                    console.log(`${digit1} ${digit2} ${digit3}`);
                }
            }
        }
    }
}

exam(["3", "5", "5"])