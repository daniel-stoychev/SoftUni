function demo(input) {
  let numberCheck = Number(input[0]);

  if (numberCheck < 100) {
    console.log("Less than 100");
  }
  if (numberCheck >= 100 && numberCheck <= 200) {
    console.log("Between 100 and 200");
  } else {
    console.log("Greater than 200");
  }
}

demo(["210"]);
