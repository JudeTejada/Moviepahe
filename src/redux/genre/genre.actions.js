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

export const loadMoreMoviesStart = (genre, page) => ({
  type: genreActionTypes.LOAD_MORE_MOVIES_GENRE_START,
  payload: { genre, page },
});

export const loadMoreMovieFinish = (movies) => ({
  type: genreActionTypes.LOAD_MORE_MOVIES_SUCCESS,
  payload: movies,
});

export const loadMoreMovieFailure = (error) => ({
  type: genreActionTypes.LOAD_MORE_MOVIES_FAILURE,
  payload: error,
});

export const hasMoreMovies = (payload) => ({
  type: genreActionTypes.HAS_MORE_MOVIES,
  payload: payload,
});
