import { useEffect, useState } from "react";

export default function StarWarsCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch("https://swapi.dev/api/people", { signal: abortController.signal })
      .then((response) => response.json())
      .then((result) => setCharacters(result.results));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h2>Start Wars Characters</h2>
      <ul>
        {characters.map((character) => (
          <li>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
