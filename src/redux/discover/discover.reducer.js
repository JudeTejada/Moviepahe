import discoverActionTypes from "./discover.types";

const initialState = {
  discoverMovies: [],
  isFetching: false,
  errorMessage: undefined,
  hasMore: true,
};

const discoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case discoverActionTypes.FETCH_DISCOVER_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
        discoverMovies: [],
      };

    case discoverActionTypes.LOAD_MORE_MOVIES_DISCOVER_START:
      return {
        ...state,
        isFetching: true,
      };

    case discoverActionTypes.FETCH_DISCOVER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        discoverMovies: action.payload,
        errorMessage: null,
      };

    case discoverActionTypes.LOAD_MORE_MOVIES_DISCOVER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        discoverMovies: [...state.discoverMovies, ...action.payload],
      };

    case discoverActionTypes.FETCH_DISCOVER_FAILURE:
    case discoverActionTypes.LOAD_MORE_MOVIES_DISCOVER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case discoverActionTypes.HAS_MORE_DISCOVER_MOVIES:
      return {
        ...state,
        hasMore: false,
      };

    default:
      return state;
  }
};

export default discoverReducer;
