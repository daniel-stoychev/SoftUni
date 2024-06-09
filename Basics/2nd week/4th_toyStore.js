function toyStore(input) {
  let tripPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollCount = Number(input[2]);
  let bearsCount = Number(input[3]);
  let minionCount = Number(input[4]);
  let truckCount = Number(input[5]);

  let moenyEarned =
    puzzleCount * 2.6 +
    dollCount * 3 +
    bearsCount * 4.1 +
    minionCount * 8.2 +
    truckCount * 2;
  let toyCount =
    puzzleCount + dollCount + bearsCount + minionCount + truckCount;

  if (toyCount >= 50) {
    let discount = 0.25 * moenyEarned;
    moenyEarned = moenyEarned - discount;
  }

  let rentMoeny = 0.1 * moenyEarned;
  moenyEarned = moenyEarned - rentMoeny;

  //let moneyDiff = Math.abs(moenyEarned - tripPrice);

  if (moenyEarned >= tripPrice) {
    let moneyLeft = moenyEarned - tripPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else {
    let moneyNeeded = tripPrice - moenyEarned;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
  }
}

toyStore(["40.8", "20", "25", "30", "50", "10"]);
