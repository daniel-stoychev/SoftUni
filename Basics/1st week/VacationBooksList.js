function readHours(input) {
  let allPages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let daysForBook = Number(input[2]);
  let hoursPerDay = allPages / pagesPerHour / daysForBook;
  console.log(hoursPerDay);
}
readHours(["212", "20", "2"]);
