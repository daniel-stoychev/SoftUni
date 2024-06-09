function newHouse(input) {
    let typeFlower = input[0];
    let quantityFlower = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;
    let rose = 5;
    let dahlia = 3.8;
    let tulip = 2.8;
    let narciss = 3;
    let gladiol = 2.5;


    switch (typeFlower) {
        case "Roses":
            price = rose * quantityFlower;
            if (quantityFlower > 80) {
                price = rose * quantityFlower * 0.9;
            }
            break;
        case "Dahlias":
            price = dahlia * quantityFlower;
            if (quantityFlower > 90) {
                price = dahlia * quantityFlower * 0.85;
            }
            break;
        case "Tulips":
            price = tulip * quantityFlower;
            if (quantityFlower > 80) {

                price = tulip * quantityFlower * 0.85;
            }
            break;
        case "Narcissus":
            price = narciss * quantityFlower;
            if (quantityFlower < 120) {

                price = narciss * quantityFlower + narciss * quantityFlower * 0.15;
            }
            break;
        case "Gladiolus":
            price = gladiol * quantityFlower;
            if (quantityFlower < 80) {

                price = gladiol * quantityFlower + gladiol * quantityFlower * 0.2;
            }
            break;
    }

    if (budget >= price) {
        console.log(
            `Hey, you have a great garden with ${quantityFlower} ${typeFlower} and ${(budget - price).toFixed(2)
            } leva left.`
        );
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Gladiolus", "64", "160"]);
