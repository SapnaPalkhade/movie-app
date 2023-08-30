// import MovieDisplay from "./MovieDisplay";

// export default function MovieList({ movies }) {
//   const start = () => <>Search For Movies</>;
//   const loaded = () => (
//     <div>
//       {movies.map((movie) => {
//         return <MovieDisplay key={movie.imdbID} movie={movie} />;
//       })}
//     </div>
//   );
//   return movies && movies.length ? loaded() : start();
// }


// MovieList.js


import React from 'react';
import MovieDisplay from './MovieDisplay';
import '../index.css';//grid styles here

export default function MovieList({ movies }) {
  const start = () => <>Search For Movies</>;
  const loaded = () => (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieDisplay key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
  return movies && movies.length ? loaded() : start();
}