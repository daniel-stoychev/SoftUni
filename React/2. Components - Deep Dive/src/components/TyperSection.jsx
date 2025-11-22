import { useState } from "react";
import Typer from "./Typer.jsx";

export default function TyperSection() {
  const [isStopped, setIsStopped] = useState(false);
  const stopToggleTyper = () => {
    setIsStopped((state) => !state);
  };
  return (
    <section>
      <h2>Typer</h2>
      {isStopped ? <p>Typer is psaused!</p> : <Typer />}

      <button onClick={stopToggleTyper}>{isStopped ? "Resume" : "Stop"}</button>
    </section>
  );
}
