function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  //let price = 0;

  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    switch (fruit) {
      case "banana":
        console.log((2.5 * quantity).toFixed(2));
        break;
      case "apple":
        console.log((1.2 * quantity).toFixed(2));
        break;
      case "orange":
        console.log((0.85 * quantity).toFixed(2));
        break;
      case "grapefruit":
        console.log((1.45 * quantity).toFixed(2));
        break;
      case "kiwi":
        console.log((2.7 * quantity).toFixed(2));
        break;
      case "pineapple":
        console.log((5.5 * quantity).toFixed(2));
        break;
      case "grapes":
        console.log((3.85 * quantity).toFixed(2));
        break;

      default:
        console.log("error");
        break;
    }
  } else if (day === "Saturday" || day === "Sunday") {
    switch (fruit) {
      case "banana":
        console.log((2.7 * quantity).toFixed(2));
        break;
      case "apple":
        console.log((1.25 * quantity).toFixed(2));
        break;
      case "orange":
        console.log((0.9 * quantity).toFixed(2));
        break;
      case "grapefruit":
        console.log((1.6 * quantity).toFixed(2));
        break;
      case "kiwi":
        console.log((3.0 * quantity).toFixed(2));
        break;
      case "pineapple":
        console.log((5.6 * quantity).toFixed(2));
        break;
      case "grapes":
        console.log((4.2 * quantity).toFixed(2));
        break;

      default:
        console.log("error");
        break;
    }
  } else console.log("error");
}

fruitShop(["graes", "Monday", "5"]);
