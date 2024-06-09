function tatalBill(input) {
  let pencilPackages = Number(input[0]);
  let pencilPackagesPrice = pencilPackages * 5.8;
  let markerPackages = Number(input[1]);
  let markerPackagesPrice = markerPackages * 7.2;
  let cleanerLiters = Number(input[2]);
  let cleanerLitersPrice = cleanerLiters * 1.2;
  let discount = Number(input[3]) / 100;
  let total = pencilPackagesPrice + markerPackagesPrice + cleanerLitersPrice;
  let discountedPrice = total * discount;
  console.log(total - discountedPrice);
}

tatalBill(["2 ", "3 ", "4 ", "25 "]);
