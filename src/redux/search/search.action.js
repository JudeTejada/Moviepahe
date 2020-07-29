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
