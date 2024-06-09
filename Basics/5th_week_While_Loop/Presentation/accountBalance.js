function account(input) {


    let sum = 0;
    let index = 0;
    let curSum = input[index];

    while (curSum !== "NoMoreMoney") {
        let curSumNumber = Number(curSum);
        if (curSumNumber < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${curSumNumber.toFixed(2)}`);
        sum += Number(input[index]);
        index++;
        curSum = input[index];

    }
    console.log(`Total: ${sum.toFixed(2)}`);

}




account(["120", "45.55", "-150"]);