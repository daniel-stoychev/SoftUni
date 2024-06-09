function bonusPoints(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let totalTime = hours * 60 + minutes + 15;

  newHour = Math.floor(totalTime / 60);
  newMin = totalTime % 60;

  if (newHour === 24) {
    newHour = 0;
  }

  if (newMin < 10) {
    console.log(`${newHour}:0${newMin}`);
  } else {
    console.log(`${newHour}:${newMin}`);
  }
}

bonusPoints(["23", "59"]);
