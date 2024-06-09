function swimRecord(input) {
  let currentSecondsRecord = Number(input[0]);
  let distanceInMeter = Number(input[1]);
  let secondsPerMeter = Number(input[2]);

  let waterResitatncePerMeter = Math.floor(distanceInMeter / 15) * 12.5;

  let totalSwimTime =
    distanceInMeter * secondsPerMeter + waterResitatncePerMeter;

  let totalSwimTimeDifference = Math.abs(currentSecondsRecord - totalSwimTime);

  if (totalSwimTime < currentSecondsRecord) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalSwimTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${totalSwimTimeDifference.toFixed(
        2
      )} seconds slower.`
    );
  }
}

swimRecord(["55555.67", "3017", "5.03"]);

// Иван трябва да преплува 3017 м.: 3017 * 5.03 = 15175.51 сек.
// На всеки 15 м. към времето му се добавят 12.5 сек.:
// 3017/ 15 = 201 * 12.5 = 2512.50 сек.
// Общо време: 15175.51 + 2512.50 = 17688.01 сек.
// Рекордът е подобрен: 55555.67 > 17688.01
