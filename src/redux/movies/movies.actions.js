import moviesActionTypes from "./movies.types";

export const fetchMoviesStart = (payload) => ({
  type: moviesActionTypes.FETCH_MOVIES_START,
  payload: payload,
});

export const fetchMoviesSuccess = (movies) => ({
  type: moviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (message) => ({
  type: moviesActionTypes.FETCH_MOVIES_FAILURE,
  payload: message,
});

export const changeRelevance = (relevance) => ({
  type: moviesActionTypes.CHANGE_RELEVANCE,
  payload: relevance,
});
