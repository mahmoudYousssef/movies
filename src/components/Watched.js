import { useMovieContext } from "./context/GlobalContext";
import "./watched.css";
import MovieCard from "./MovieCard";

const Watched = () => {
  const MovieContext = useMovieContext();

  return (
    <div className="watched">
      <div className="container">
        <div className="main-heading">
          <h1>My watched </h1>
          <span className="movies-count">
            {MovieContext.watched.length}
            {MovieContext.watched.length === 1 ? "Movie" : "Movies"}
          </span>
          
        </div>
        {MovieContext.watched.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movie">No Movies </h2>
        )}
      </div>
    </div>
  );
};


export default Watched;
