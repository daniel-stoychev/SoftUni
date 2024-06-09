function tennisRanklist(input) {
    let tournametsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let finalPoints = 0;

    let tournametWin = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] === "W") {
            finalPoints += 2000;
        } else if (input[i] === "F") {
            finalPoints += 1200;
        } else if (input[i] === "SF") {
            finalPoints += 720;
        }
        if (input[i] === "W") {
            tournametWin++;
        }
    }

    console.log(`Final points: ${startingPoints + finalPoints}`);
    console.log(`Average points: ${Math.floor(finalPoints / tournametsCount)}`);
    console.log(`${((tournametWin / tournametsCount) * 100).toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
