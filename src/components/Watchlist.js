import { useMovieContext } from './context/GlobalContext';
import MovieCard from './MovieCard';
import "./Watchlist.css";

const Watchlist = () => {
  const MovieContext = useMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h1>My Watchlist</h1>
          <span className='movies-count'>4Movies</span>
        </div>
        {MovieContext.watchlist.length > 0 ? (<div className='movie-grid'>
          {MovieContext.watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} type="watchlist"/>
          ))}
        </div>): <h2 className='no-movie'>No Movies in your list, add some! </h2> }
      </div>
    </div>
  );
};

export default Watchlist