import { useState } from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Calendar() {
  const [day, setDay] = useState(0);
  const nextDayClickHandler = () => {
    setDay((state) => state + 1);
  };
  const resetDayClickHandler = () => {
    setDay(0);
  };

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
      <p>Current Day {days[day]}</p>
      <button onClick={nextDayClickHandler}>Next day</button>
    </section>
  );
}
