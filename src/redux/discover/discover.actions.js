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
