function travel(input) {

    let destination = input[0];
    let packageType = input[1];
    let isVIP = input[2];
    let days = Number(input[3]);

    let pricePerDay = 0;
    let sum = 0;

    if (days > 7) {
        days = days - 1;
    }

    if (days <= 0) {
        console.log("Days must be positive number!");
        return;
    }

    if (destination === "Bansko" || destination === "Borovets" || destination === "Varna" || destination === "Burgas") {
        switch (packageType) {
            case "withEquipment":
                pricePerDay = 100;
                if (isVIP === "yes") {
                    sum = pricePerDay * days * 0.9;
                } else {
                    sum = pricePerDay * days;
                }
                break;

            case "noEquipment":
                pricePerDay = 80;
                if (isVIP === "yes") {
                    sum = pricePerDay * days * 0.95;
                } else {
                    sum = pricePerDay * days;
                }
                break;
            case "withBreakfast":
                pricePerDay = 130;
                if (isVIP === "yes") {
                    sum = pricePerDay * days * 0.88;
                } else {
                    sum = pricePerDay * days;
                }
                break;

            case "noBreakfast":
                pricePerDay = 100;
                if (isVIP === "yes") {
                    sum = pricePerDay * days * 0.93;
                } else {
                    sum = pricePerDay * days;
                }
                break;
            default:
                console.log("Invalid input!");
                break;
        }

    } else {
        console.log("Invalid input!");
        return;
    }

    console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);

}

travel(["Varna",

    "noBreakfast",

    "no",

    "3"])