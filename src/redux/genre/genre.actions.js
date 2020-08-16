import genreActionTypes from "./genre.types";

export const fetchGenreStart = (payload) => ({
  type: genreActionTypes.FETCH_GENRE_START,
  payload: payload,
});

export const fetchGenreSuccess = (movies) => ({
  type: genreActionTypes.FETCH_GENRE_SUCCESS,
  payload: movies,
});

export const fetchGenreFailure = (message) => ({
  type: genreActionTypes.FETCH_GENRE_FAILURE,
  payload: message,
});
