function specialNum(input) {

    let number = Number(input[0]);
    let result = '';

    for (let index = 1111; index <= 9999; index++) {
        let numInStr = index.toString();
        let isSpecial = true;

        for (let num = 0; num < numInStr.length; num++) {
            let digit = Number(numInStr[num]);

            if (number % digit !== 0) {
                isSpecial = false;
                break;
            }

        }
        if (isSpecial) {
            result += index + ' ';
        }

    }
    console.log(result.trim());
}

specialNum(["3"])