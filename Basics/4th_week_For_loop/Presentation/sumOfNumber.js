function sumOfNum(input) {
    let num = input[0];

    let sum = 0;

    for (let index = 0; index < num.length; index++) {
        let digit = Number(num[index]);
        sum += digit;
    }

    console.log(`The sum of the digits is:${sum}`);

}

sumOfNum(["564891"]);