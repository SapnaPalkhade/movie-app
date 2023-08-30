//import "./src/index.css"
import styles from './App.module.scss';
import Form from "../../components/Form";
import MovieDisplay from "../../components/MovieDisplay";
import MovieList from "../../components/MovieList";
import { useState, useEffect } from "react";

export default function App() {
  const apiKey = "98e3fb1f";

  // const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  const getMovies = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Form getMovies={getMovies} />
      <MovieList movies={movies} />
    </div>
  );
}
