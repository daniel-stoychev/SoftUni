function smartLili(input) {

    let liliSage = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneySaved = 0;
    let moneyGiven = 10;

    for (let i = 1; i <= liliSage; i++) {
        if (i % 2 !== 0) {
            moneySaved += toyPrice;
        } else {
            moneySaved += moneyGiven - 1;
            moneyGiven += 10;
        }

    }

    if (moneySaved >= washingMachinePrice) {
        console.log(`Yes! ${(moneySaved - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - moneySaved).toFixed(2)}`);
    }


}

smartLili(["10", "170.00", "6"]);