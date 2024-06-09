function budget(input) {
  let budget = Number(input[0]);
  let numberStatists = Number(input[1]);
  let clothingPrice = Number(input[2]);
  let decor = 0.1 * budget;
  let clothingPriceAll = clothingPrice * numberStatists;

  if (numberStatists > 150) {
    clothingPriceAll = clothingPriceAll - clothingPriceAll * 0.1;
    // or clothingPriceAll = clothingPriceAll * 0.9;
  }

  if (decor + clothingPriceAll > budget) {
    console.log("Not enough money!");
    let menyNeeded = decor + clothingPriceAll - budget;
    console.log(`Wingard needs ${menyNeeded.toFixed(2)} leva more.`);
  } else if (decor + clothingPriceAll <= budget) {
    console.log("Action!");
    let moneyLeft = budget - clothingPriceAll - decor;
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  }
}

budget(["20000", "120", "55.5"]);
