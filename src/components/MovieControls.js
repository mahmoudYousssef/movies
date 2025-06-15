import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionTypes";

const MovieControls = ({ movie, type }) => {
  const MovieContext = useMovieContext();
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.Add_Movie_To_Watched,
                payload: movie,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-solid fa-eye" />
          </button>
          <button
            onClick={(params) =>
              MovieContext.MoviesDispatch({
                type: actions.Remove_Movie_From_Watchlist,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            onClick={(params) =>
              MovieContext.MoviesDispatch({
                type: actions.MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-solid fa-eye-slash" />
          </button>
          <button
            onClick={(params) =>
              MovieContext.MoviesDispatch({
                type: actions.Remove_Movie_From_Watched,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
