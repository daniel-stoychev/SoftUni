function basketball(input) {
  let sneakers = 0.6 * Number(input[0]);
  let outfit = 0.8 * sneakers;
  let ball = outfit / 4;
  let accessories = ball / 5;
  console.log(sneakers + outfit + ball + accessories + Number(input[0]));
}

basketball(["365 "]);
