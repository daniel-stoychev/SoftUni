function trade(input) {
  let city = input[0];
  let sellings = input[1];

  switch (city) {
    case "Sofia":
      if (sellings >= 0) {
        if (sellings <= 500) {
          console.log((0.05 * sellings).toFixed(2));
        } else if (sellings <= 1000) {
          console.log((0.07 * sellings).toFixed(2));
        } else if (sellings <= 10000) {
          console.log((0.08 * sellings).toFixed(2));
        } else {
          console.log((0.12 * sellings).toFixed(2));
        }
      } else {
        console.log("error");
      }
      break;

    case "Varna":
      if (sellings >= 0) {
        if (sellings <= 500) {
          console.log((0.045 * sellings).toFixed(2));
        } else if (sellings <= 1000) {
          console.log((0.075 * sellings).toFixed(2));
        } else if (sellings <= 10000) {
          console.log((0.1 * sellings).toFixed(2));
        } else {
          console.log((0.13 * sellings).toFixed(2));
        }
      } else {
        console.log("error");
      }
      break;

    case "Plovdiv":
      if (sellings >= 0) {
        if (sellings <= 500) {
          console.log((0.055 * sellings).toFixed(2));
        } else if (sellings <= 1000) {
          console.log((0.08 * sellings).toFixed(2));
        } else if (sellings <= 10000) {
          console.log((0.12 * sellings).toFixed(2));
        } else {
          console.log((0.145 * sellings).toFixed(2));
        }
      } else {
        console.log("error");
      }
      break;

    default:
      console.log("error");
      break;
  }
}

trade(["Plovdiv", "125"]);
