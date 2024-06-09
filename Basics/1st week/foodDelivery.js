function foodDelivery(input) {
  let chickenMenu = Number(input[0]) * 10.35;
  let fishMenu = Number(input[1]) * 12.4;
  let vegetarianMenu = Number(input[2]) * 8.15;
  let desert = (chickenMenu + fishMenu + vegetarianMenu) * 0.2;
  let delivery = 2.5;
  console.log(chickenMenu + fishMenu + vegetarianMenu + desert + delivery);
}
foodDelivery(["2 ", "4 ", "3 "]);
