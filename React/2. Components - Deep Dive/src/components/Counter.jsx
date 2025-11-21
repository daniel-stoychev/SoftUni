import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementClickHandler() {
    // setCount(count + 1); // NOT RECOMMENDED Race condition prone
    setCount((prevState) => prevState + 1); // Race condition safe / udpdater function
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={incrementClickHandler}>Click me!</button>
    </div>
  );
}
