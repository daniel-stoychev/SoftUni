function backToThePast(input) {


    let Money = Number(input[0]);
    let livingYear = Number(input[1]);


    let age = 18;


    for (let i = 1800; i <= livingYear; i++) {

        if (i % 2 === 0) {
            Money -= 12000;
        } else {
            Money -= (12000 + 50 * age);
        }
        age += 1;

    }

    if (Money > 0) {
        console.log(`Yes! He will live a carefree life and will have ${Money.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(Money.toFixed(2))} dollars to survive.`);
    }

}

backToThePast(["1000000", "1900"]);