function ticket(input) {
  let weekDay = input[0];
  let ticketPrice = 0;

  switch (weekDay) {
    case "Monday":
      ticketPrice += 12;
      break;
    case "Tuesday":
      ticketPrice += 12;
      break;
    case "Wednesday":
      ticketPrice += 14;
      break;
    case "Thursday":
      ticketPrice += 14;
      break;
    case "Friday":
      ticketPrice += 12;
      break;
    case "Saturday":
      ticketPrice += 16;
      break;
    case "Sunday":
      ticketPrice += 16;
      break;
  }
  console.log(ticketPrice);
}

ticket(["Monday"]);
