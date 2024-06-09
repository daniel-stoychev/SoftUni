function repainting(input) {
  let nylon = (2 + Number(input[0])) * 1.5;
  let paint = (Number(input[1]) + 0.1 * Number(input[1])) * 14.5;
  let thinner = Number(input[2]) * 5;
  let time = Number(input[3]);
  let bags = 0.4;
  let materialsPrice = nylon + paint + thinner + bags;
  let craftsmanSalary = materialsPrice * 0.3;
  let total = materialsPrice + craftsmanSalary * time;
  console.log(total);
}
repainting(["10 ", "11 ", "4 ", "8 "]);
