function shopping(input) {
  let budget = Number(input[0]);
  let videoCardsNeeded = Number(input[1]);
  let processorsNeeded = Number(input[2]);
  let ramNeeded = Number(input[3]);

  let videoCard = 250;
  let processor = 0.35 * videoCardsNeeded * videoCard;
  let ram = 0.1 * videoCardsNeeded * videoCard;

  let total =
    videoCard * videoCardsNeeded +
    processor * processorsNeeded +
    ram * ramNeeded;

  if (videoCardsNeeded > processorsNeeded) {
    total = 0.85 * total;
  }
  if (budget >= total) {
    console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(total - budget).toFixed(2)} leva more!`
    );
  }
}

shopping(["920.45", "3", "1", "1"]);
