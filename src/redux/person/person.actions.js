import personActionTypes from "./person.types";

export const fetchPersonStart = ({ category, id }) => ({
  type: personActionTypes.FETCH_PERSON_START,
  payload: { category, id },
});

export const fetchPersonSuccess = (payload) => ({
  type: personActionTypes.FETCH_PERSON_SUCCESS,
  payload: payload,
});

export const fetchPersonFailure = (message) => ({
  type: personActionTypes.FETCH_PERSON_FAILURE,
  payload: message,
});
