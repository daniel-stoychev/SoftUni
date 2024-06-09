function bonus(input) {
  let scoreNum = Number(input[0]);
  let bonusPoints = 0;
  if (scoreNum <= 100) {
    bonusPoints = 5;
  } else if (scoreNum >= 1000) {
    bonusPoints = 0.1 * scoreNum;
  } else {
    bonusPoints = 0.2 * scoreNum;
  }
  if (scoreNum % 2 === 0) {
    bonusPoints += 1;
  } else if (scoreNum % 10 === 5) {
    bonusPoints += 2;
  }
  console.log(bonusPoints);
  console.log(scoreNum + bonusPoints);
}

bonus([2703]);
