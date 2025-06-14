import "./ResultCard.css";
import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionTypes";

const ResultCard = ({ movie }) => {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.watchlist.find((o) => 
    o.imdbID === movie.imdbID
  );
  const storedMovieWatched = MovieContext.watched.find((o) =>
    o.imdbID === movie.imdbID
  );
  const WatchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const WatchedDisabled = storedMovieWatched
    ? true
    : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="result-date">{movie.Year}</h4> : "-"}
        </div>{" "}
        <div className="controls">
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.Add_Movie_To_Watchlist,
                payload: movie,
              })
            }
            className="btn"
            disabled={WatchlistDisabled}
          >
            Add to Watchlist
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.Add_Movie_To_Watched,
                payload: movie,
              })
            }
            className="btn"
            disabled={WatchedDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
