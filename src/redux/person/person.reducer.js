import personActionTypes from "./person.types";

const initialState = {
  person: {},
  casting: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case personActionTypes.FETCH_PERSON_START:
      return {
        ...state,
        isFetching: true,
      };

    case personActionTypes.FETCH_PERSON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        person: action.payload.person,
        casting: action.payload.casting,
      };

    case personActionTypes.FETCH_PERSON_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default personReducer;
