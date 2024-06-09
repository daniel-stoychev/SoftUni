function safari(input) {

    let fuelPerLiter = 2.10;
    let guidePrice = 100;

    let budget = Number(input[0]);
    let fuelNeeded = Number(input[1]);
    let day = input[2];

    let totalFuelPrice = fuelPerLiter * fuelNeeded;
    let totalSumNeeded = guidePrice + totalFuelPrice;

    switch (day) {
        case "Saturday":
            totalSumNeeded *= 0.90;
            break;
        case "Sunday":
            totalSumNeeded *= 0.80;
            break;
    }

    let moneyDiff = Math.abs(budget - totalSumNeeded).toFixed(2);

    if (totalSumNeeded <= budget) {
        console.log(`Safari time! Money left: ${moneyDiff} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${moneyDiff} lv.`);
    }

}

safari(["120",

    "30",

    "Saturday"]);

