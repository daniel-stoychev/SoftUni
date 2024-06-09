function outfitClothes(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];

    let outfit;
    let shoes;

    if (timeOfDay === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (25 <= degrees) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }

    if (timeOfDay === "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (25 <= degrees) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    }

    if (timeOfDay === "Evening") {
        outfit = "Shirt";
        shoes = "Moccasins";
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

outfitClothes(["30", "Evening"]);
