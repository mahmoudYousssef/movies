import * as actions from "./ActionTypes";


export const reducer = (state, action) => {
  switch (action.type) {
    case actions.Add_Movie_To_Watchlist:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case actions.Remove_Movie_From_Watchlist:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbId !== action.payload
        ),
      };
    case actions.Add_Movie_To_Watched:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbId !== action.payload.imdbId
        ),
        watched: [action.payload, ...state.watched],
 
      };
    case actions.Remove_Movie_From_Watched:
      return {
        ...state,
        watched: state.watched.filter( 
          (movie) => movie.imdbId !== action.payload
        ),
      };
    case actions.MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbId !== action.payload.imdbId
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    default:
      return state;
  }
};
