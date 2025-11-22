import { useEffect, useState } from "react";

export default function Typer() {
  const [key, setKey] = useState("Press any key to start!");
  useEffect(() => {
    const keyPressHandler = (event) => {
      setKey(event.key);
    };

    window.addEventListener("keypress", keyPressHandler);

    return () => {
      window.removeEventListener("keypress", keyPressHandler);
    };
  }, []);

  return (
    <section>
      <p>Pressed Key</p>
      <strong>{key}</strong>
    </section>
  );
}
