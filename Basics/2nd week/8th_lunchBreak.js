function lunchTime(input) {
  let movieTitle = input[0];
  let episodeDuration = Number(input[1]);
  let breаkDuration = Number(input[2]);

  let lunchDuration = (1 / 8) * breаkDuration;
  let leisureTime = (1 / 4) * breаkDuration;
  let movieTime = breаkDuration - lunchDuration - leisureTime;

  if (episodeDuration < movieTime) {
    console.log(
      `You have enough time to watch ${movieTitle} and left with ${Math.ceil(
        movieTime - episodeDuration
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(
        episodeDuration - movieTime
      )} more minutes.`
    );
  }
}

lunchTime(["Game of Thrones", "60", "96"]);
