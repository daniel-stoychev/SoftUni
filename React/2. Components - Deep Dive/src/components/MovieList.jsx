import { useState } from "react";

export default function MocieList() {
  const [movies, setMovies] = useState([
    "Movie1",
    "Movie2",
    "Movie3",
    "Movie4",
  ]);

  const updateMovieHandler = () => {
    setMovies((oldMovies) => {
      const newMovies = [...oldMovies];
      const removedMovie = newMovies.shift();
      newMovies.push(removedMovie);
      return newMovies;
    });
  };

  return (
    <section>
      <h1>MovieList</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
      <button onClick={updateMovieHandler}>Update MovieList</button>
    </section>
  );
}
