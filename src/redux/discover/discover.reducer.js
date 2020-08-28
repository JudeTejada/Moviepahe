import discoverActionTypes from "./discover.types";

const initialState = {
  discoverMovies: [],
  isFetching: false,
  errorMessage: undefined,
};

const discoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case discoverActionTypes.FETCH_DISCOVER_START:
      return {
        ...state,
        isFetching: true,
        discoverMovies: [],
        errorMessage: null,
      };

    case discoverActionTypes.FETCH_DISCOVER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        discoverMovies: action.payload,
        errorMessage: null,
      };

    case discoverActionTypes.FETCH_DISCOVER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default discoverReducer;
