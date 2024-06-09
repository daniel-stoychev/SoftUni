function coins(input) {

    let change = Number(input[0]);
    let changeInCoins = change * 100;

    let coinsUsed = 0;

    while (changeInCoins > 0) {
        if (changeInCoins - 200 >= 0) {
            changeInCoins -= 200;
        } else if (changeInCoins - 100 >= 0) {
            changeInCoins -= 100;
        } else if (changeInCoins - 50 >= 0) {
            changeInCoins -= 50;
        } else if (changeInCoins - 20 >= 0) {
            changeInCoins -= 20;
        } else if (changeInCoins - 10 >= 0) {
            changeInCoins -= 10;
        } else if (changeInCoins - 5 >= 0) {
            changeInCoins -= 5;
        } else if (changeInCoins - 2 >= 0) {
            changeInCoins -= 2;
        } else if (changeInCoins - 1 >= 0) {
            changeInCoins -= 1;
        } else {
            break;
        }
        coinsUsed++;

    }
    console.log(coinsUsed);



}

coins(["0.56"])

// Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка