function usdToBgn(input) {
  let dollars = Number(input[0]);
  let levs = dollars * 1.79549;
  console.log(levs);
}
usdToBgn(["22"]);

function convertor(Radian) {
  let radians = Number(Radian[0]);
  let degree = (radians * 180) / Math.PI;
  console.log(degree);
}
convertor(["3.1416"]);
