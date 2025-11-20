import "./App.css";
import { useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  setTimeout(() => {
    setSeconds(seconds + 1);
  }, 1000);
  return (
    <div>
      <h1>React timer app</h1>
      <div>{seconds} seconds</div>
    </div>
  );
}

export default App;
