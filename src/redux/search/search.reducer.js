import searchActionTypes from "./search.types";

const INITIAL_STATE = {
  moviesFound: [],
  isLoading: false,
  errorMessage: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionTypes.QUERY_MOVIE_START:
    case searchActionTypes.LOAD_MORE_MOVIES_START:
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

    case searchActionTypes.LOAD_MORE_MOVIES_SUCCESS:
      const { moviesFound } = state;

      return {
        ...state,
        isLoading: false,
        moviesFound: [...moviesFound, ...action.payload],
      };

    case searchActionTypes.QUERY_MOVIE_FAILURE:
    case searchActionTypes.LOAD_MORE_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
