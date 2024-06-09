function totalSum(input) {
  let sum = Number(input[0]);
  let time = Number(input[1]);
  let percentage = Number(input[2] / 100);
  let winnings = sum + time * ((sum * percentage) / 12);
  console.log(winnings);
}

totalSum(["200 ", "3 ", "5.7 "]);
