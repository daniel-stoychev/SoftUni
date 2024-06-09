function jorney(input) {
    let budget = Number(input[0]);
    let season = (input[1]);

    let destination;
    let accommodation;
    let sum;


    if (season === "summer") {
        accommodation = "Camp";
    } else if (season === "winter") {
        accommodation = "Hotel";
    }

    if (budget <= 100 && season === "summer") {
        destination = "Bulgaria";
        sum = 0.3 * budget;
    } else if (budget <= 100 && season === "winter") {
        destination = "Bulgaria";
        sum = 0.7 * budget;
    }

    if (budget <= 1000 && budget > 100 && season === "summer") {
        destination = "Balkans";
        sum = 0.4 * budget;
    } else if (budget <= 1000 && budget > 100 && season === "winter") {
        destination = "Balkans";
        sum = 0.8 * budget;
    }

    if (budget > 1000) {
        destination = "Europe";
        accommodation = "Hotel";
        sum = 0.9 * budget;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${(sum).toFixed(2)}`);



}

jorney(["1500", "summer"]);
