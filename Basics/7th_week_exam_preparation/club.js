function club(input) {

    let targetSum = Number(input[0]);
    let index = 1;
    let command = input[index];
    let allCocktailSum = 0;

    while (command !== "Party!") {
        let cocktailName = input[index];
        let cocktailPrice = cocktailName.length;
        index++;
        let cocktailCount = Number(input[index]);
        let curCocktailPrice = cocktailPrice * cocktailCount;

        if (curCocktailPrice % 2 !== 0) {
            curCocktailPrice *= 0.75;
        }

        allCocktailSum += curCocktailPrice;

        if (allCocktailSum >= targetSum) {
            console.log("Target acquired.");
            break;
        }
        index++;
        command = input[index];
    }
    if (targetSum >= allCocktailSum || command === "Party!") {
        console.log(`We need ${(targetSum - allCocktailSum).toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${allCocktailSum.toFixed(2)} leva.`);
}

club(["500",

    "Bellini",

    "6",

    "Bamboo",

    "7",

    "Party!"])