import { useState } from "react";

// const days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

export default function Calendar() {
  const [day, setDay] = useState(0);
  const nextDayClickHandler = () => {
    setDay((state) => state + 1);
  };
  const resetDayClickHandler = () => {
    setDay(0);
  };

  let currentDay;

  switch (day) {
    case 0:
      currentDay = <strong>Monday</strong>;
      break;
    case 1:
      currentDay = <strong>Tuesday</strong>;
      break;
    case 2:
      currentDay = <strong>Wednesday</strong>;
      break;
    case 3:
      currentDay = <strong>Thursday</strong>;
      break;
    case 4:
      currentDay = <strong>Friday</strong>;
      break;
    case 5:
      currentDay = <strong>Saturday</strong>;
      break;
    case 6:
      currentDay = <strong>Sunday</strong>;
      break;

    default:
      break;
  }

  if (day > 6) {
    return (
      <section>
        <h1>Calendar</h1>
        <strong>Ivalid day</strong>
        <p>
          <button onClick={resetDayClickHandler}>Reset day</button>
        </p>
      </section>
    );
  }

  return (
    <section>
      <h1>Calendar</h1>
      {/* <p>Current Day {days[day]}</p> */}
      <p>Current Day {currentDay}</p>
      <button onClick={nextDayClickHandler}>Next day</button>
    </section>
  );
}
