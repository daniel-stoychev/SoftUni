function numbers(input) {

    let primeNumSum = 0;
    let nonPrimeNumSum = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }

        }

        if (isPrime) {
            primeNumSum += num;
        } else {
            nonPrimeNumSum += num;
        }

        command = input[index];
        index++;

    }
    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`);

}

numbers(["30",

    "83",

    "33",

    "-1",

    "20",

    "stop"])