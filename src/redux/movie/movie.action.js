import movieActionTypes from "./movie.types";

export const fetchMoviesStart = (id) => ({
  type: movieActionTypes.FETCH_MOVIES_START,
  payload: id,
});

export const fetchMoviesSuccess = (movies) => ({
  type: movieActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (message) => ({
  type: movieActionTypes.FETCH_MOVIES_FAILURE,
  payload: message,
});
