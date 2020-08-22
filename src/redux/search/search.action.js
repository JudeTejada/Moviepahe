import searchActionTypes from "./search.types";

export const queryMovieStart = (query) => ({
  type: searchActionTypes.QUERY_MOVIE_START,
  payload: query,
});

export const queryMovieFinish = (movies) => ({
  type: searchActionTypes.QUERY_MOVIE_SUCCESS,
  payload: movies,
});

export const queryMovieFailure = (error) => ({
  type: searchActionTypes.QUERY_MOVIE_FAILURE,
  payload: error,
});

export const loadMoreMoviesStart = (query, page) => ({
  type: searchActionTypes.LOAD_MORE_MOVIES_START,
  payload: { query, page },
});

export const loadMoreMovieFinish = (movies) => ({
  type: searchActionTypes.LOAD_MORE_MOVIES_SUCCESS,
  payload: movies,
});

export const loadMoreMovieFailure = (error) => ({
  type: searchActionTypes.LOAD_MORE_MOVIES_FAILURE,
  payload: error,
});
