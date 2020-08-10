import movieActionTypes from "./movie.types";

export const fetchMovieStart = ({ category, id }) => ({
  type: movieActionTypes.FETCH_MOVIE_START,
  payload: { category, id },
});

export const fetchMovieSuccess = (payload) => ({
  type: movieActionTypes.FETCH_MOVIE_SUCCESS,
  payload: payload,
});

export const fetchMovieFailure = (message) => ({
  type: movieActionTypes.FETCH_MOVIES_FAILURE,
  payload: message,
});
