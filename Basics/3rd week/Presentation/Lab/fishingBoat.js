function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = (input[1]);
    let fisherMan = Number(input[2]);

    let price = 0;

    if (season === "Spring") {
        if (fisherMan <= 6) {
            price = 3000 * 0.9;
        } if (fisherMan >= 7 && fisherMan <= 11) {
            price = 3000 * 0.85;
        } if (fisherMan >= 12) {
            price = 3000 * 0.75;
        }
    }

    if (season === "Summer" || season === "Autumn") {
        if (fisherMan <= 6) {
            price = 4200 * 0.9;
        } if (fisherMan >= 7 && fisherMan <= 11) {
            price = 4200 * 0.85;
        } if (fisherMan >= 12) {
            price = 4200 * 0.75;
        }
    }

    if (season === "Winter") {
        if (fisherMan <= 6) {
            price = 2600 * 0.9;
        } if (fisherMan >= 7 && fisherMan <= 11) {
            price = 2600 * 0.85;
        } if (fisherMan >= 12) {
            price = 2600 * 0.75;
        }
    }

    if (season === "Spring" || season === "Summer" || season === "Winter") {
        if (fisherMan % 2 === 0) {
            price = price * 0.95;
        }
    }

    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }

}

fishingBoat(["3000", "Summer", "11"]);