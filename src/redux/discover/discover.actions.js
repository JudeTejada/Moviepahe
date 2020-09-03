import discoverActionTypes from "./discover.types";

export const fetchDiscoverStart = (payload) => ({
  type: discoverActionTypes.FETCH_DISCOVER_START,
  payload: payload,
});

export const fetchDiscoverSuccess = (movies) => ({
  type: discoverActionTypes.FETCH_DISCOVER_SUCCESS,
  payload: movies,
});

export const fetchDiscoverFailure = (message) => ({
  type: discoverActionTypes.FETCH_DISCOVER_FAILURE,
  payload: message,
});

export const loadMoreMoviesStart = (query, page) => ({
  type: discoverActionTypes.LOAD_MORE_MOVIES_DISCOVER_START,
  payload: { query, page },
});

export const loadMoreMovieFinish = (movies) => ({
  type: discoverActionTypes.LOAD_MORE_MOVIES_DISCOVER_SUCCESS,
  payload: movies,
});

export const loadMoreMovieFailure = (error) => ({
  type: discoverActionTypes.LOAD_MORE_MOVIES_DISCOVER_FAILURE,
  payload: error,
});

export const hasMoreMovies = (payload) => ({
  type: discoverActionTypes.HAS_MORE_DISCOVER_MOVIES,
  payload: payload,
});
