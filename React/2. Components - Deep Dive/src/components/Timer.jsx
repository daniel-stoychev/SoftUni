import { useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  setTimeout(() => {
    setSeconds(seconds + 1);
  }, 1000);
  return (
    <div>
      <h1>Timer</h1>
      <div>{seconds} seconds</div>
    </div>
  );
}
