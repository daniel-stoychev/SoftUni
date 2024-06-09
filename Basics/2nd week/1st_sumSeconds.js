function sumSeconds(input) {
  let firstCompetitor = Number(input[0]);
  let seconCompetitor = Number(input[1]);
  let thirdCompetitor = Number(input[2]);

  let totalTime = firstCompetitor + seconCompetitor + thirdCompetitor;

  let minutesTime = Math.floor(totalTime / 60);
  let secondsTime = totalTime % 60;

  if (secondsTime < 10) {
    console.log(minutesTime + ":0" + secondsTime);
  } else {
    console.log(minutesTime + ":" + secondsTime);
  }
}

sumSeconds(["35", "45", "44"]);
