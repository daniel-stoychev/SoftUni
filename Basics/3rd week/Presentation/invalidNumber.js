function invalidNumber(input) {
  let num = Number(input[0]);

  if (num >= 100) {
    if (num <= 200) {
      console.log("");
    } else {
      console.log("invalid");
    }
  } else if (num === 0) {
    console.log("");
  } else {
    console.log("invalid");
  }
}

invalidNumber(["150"]);
