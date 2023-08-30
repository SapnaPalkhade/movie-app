import { useState } from "react";
import MovieDescription from "./MovieDescription";

export default function MovieDisplay({ movie }) {
  const [desc, setDesc] = useState(false);

  function handleClick() {
    setDesc(!desc);
  }

  const loaded = () => (
    <div onClick={handleClick}>
      <div key={movie.imdbID}>
        <h2>{movie.Title}</h2>
        <h3>{movie.Year}</h3>
        <img src={movie.Poster} alt={movie.Title} />
        {desc && <MovieDescription movie={movie} />}
      </div>
    </div>
  );

  return loaded();
}

// export default function MovieDisplay({ movies }) {
//   const loading = () => <>Currently Loading Movie...</>;
//   const loaded = () => (
//     <div>
//       <h2>{movies.Title}</h2>
//       <img src={movies.Poster} alt={movies.Title} />
//     </div>
//   );

//   return movies && movies.Title ? loaded() : loading();
// }
