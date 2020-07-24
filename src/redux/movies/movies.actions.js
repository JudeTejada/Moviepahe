import moviesActionTypes from "./movies.types";

export const fetchMoviesStart = () => ({
  type: moviesActionTypes.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (movies) => ({
  type: moviesActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (message) => ({
  type: moviesActionTypes.FETCH_MOVIES_FAILURE,
  payload: message,
});
