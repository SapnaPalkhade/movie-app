import { useState, useEffect } from "react";

export default function MovieDescription({ movie }) {
  const apiKey = "98e3fb1f";
  const [item, setItem] = useState(movie);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
      );
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <ul>
        <li>
          <strong>Plot</strong>: {item.Plot}
        </li>
        <li>
          <strong>Director: </strong>
          {item.Director}
        </li>
        <li>{item.Actors}</li>
        <li>{item.imdbRating}</li>
      </ul>
    </div>
  );
}
