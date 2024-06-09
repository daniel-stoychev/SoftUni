function exercise(input) {

    let people = Number(input[0]);
    let entranceFee = Number(input[1]);
    let sunbedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalEntranceFee = people * entranceFee;
    let allSunbeds = Math.ceil(0.75 * people);
    let totalsunbedPrice = allSunbeds * sunbedPrice;
    let allUmbrellas = Math.ceil(people / 2);
    let totalUmbrellaPrice = umbrellaPrice * allUmbrellas;

    let allSum = totalEntranceFee + totalsunbedPrice + totalUmbrellaPrice;

    console.log(`${allSum.toFixed(2)} lv.`);

}

exercise(["21", "5.50", "4.40", "6.20"])