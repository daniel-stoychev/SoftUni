function vacation(input) {

    let moneyRequired = Number(input[0]);
    let moneyAvailable = Number(input[1]);

    let index = 2;
    let command = input[index];
    index++;

    let money = input[index];
    index++;

    let days = 0;
    let curMoney = moneyAvailable;

    while (curMoney > 0) {
        let moneyInNum = Number(money);
        days++;


        if (command === "spend") {
            curMoney -= moneyInNum;
            // if (curMoney < 0) {
            //     console.log("You can't save the money.");
            //     console.log(`${days}`);
            //     break;
            // }

        } else if (command === "save") {
            curMoney += moneyInNum;
            if (curMoney + moneyAvailable >= moneyRequired) {
                console.log(`You saved the money for ${days} days.`);
            }
        }


        command = input[index];
        index++;

        money = input[index];
        index++;

    }

}

vacation(["2000",

    "1000",

    "spend",

    "1200",

    "save",

    "2000"])
