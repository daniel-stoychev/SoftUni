function service(input) {
  let squareMeter = Number(input[0]);
  let squareMeterPrice = squareMeter * 7.61;
  let discount = 0.18 * squareMeterPrice;
  let finalPrice = squareMeterPrice - discount;
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
service(["550"]);

// function service(input) {
//   let squareMeter = Number(input[0]);
//   let squareMeterPrice = squareMeter * 7.61;
//   let finalPrice = (squareMeterPrice - (squareMeterPrice * 18) / 100).toFixed(2);
//   let discount = (squareMeterPrice - finalPrice).toFixed(2);
//   console.log(`The final price is: ${finalPrice} lv.`);
//   console.log(`The discount is: ${discount} lv.`);
// }
// service(["550"]);
