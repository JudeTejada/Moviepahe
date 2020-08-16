import genreActionTypes from "./genre.types";

export const fetchMovieByGenreStart = (payload) => ({
  type: genreActionTypes.FETCH_MOVIE_BY_GENRE_START,
  payload: payload,
});

export const fetchMovieByGenreSuccess = (movies) => ({
  type: genreActionTypes.FETCH_MOVIE_BY_GENRE_SUCCESS,
  payload: movies,
});

export const fetchMovieByGenreFailure = (message) => ({
  type: genreActionTypes.FETCH_MOVIE_BY_GENRE_FAILURE,
  payload: message,
});

export const fetchGenresStart = () => ({
  type: genreActionTypes.FETCH_GENRES_START,
});

export const fetchGenresSuccess = (genres) => ({
  type: genreActionTypes.FETCH_GENRES_SUCCESS,
  payload: genres,
});
