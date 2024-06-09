function skiTrip(input) {

    let days = Number(input[0]) - 1;
    let roomType = input[1];
    let assessment = input[2];

    let price = 0;

    if (roomType === "room for one person") {
        price = 18.00 * days;
    }
    if (roomType === "apartment") {
        if (days < 10) {
            price = 25.00 * days * 0.7;
        } else if (days <= 15) {
            price = 25.00 * days * 0.65;
        } else {
            price = 25.00 * days * 0.50;
        }
    }
    if (roomType === "president apartment") {
        if (days < 10) {
            price = 35.00 * days * 0.9;
        } else if (days <= 15) {
            price = 35.00 * days * 0.85;
        } else {
            price = 35.00 * days * 0.8;
        }
    }
    if (assessment === "positive") {
        price = price + price * 0.25;
    } else {
        price = price - price * 0.10;
    }

    console.log(price.toFixed(2));

}

skiTrip(["30", "president apartment", "negative"]);