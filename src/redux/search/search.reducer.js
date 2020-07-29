import searchActionTypes from "./search.types";

const INITIAL_STATE = {
  moviesFound: [],
  isLoading: false,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionTypes.QUERY_MOVIE_START:
      return {
        ...state,
        isLoading: true,
      };
    case searchActionTypes.QUERY_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        moviesFound: action.payload,
      };

    case searchActionTypes.QUERY_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default searchReducer;
