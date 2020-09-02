import moviesActionTypes from "./movies.types";

const initialState = {
  initMovies: [],
  isFetching: false,
  errorMessage: undefined,
  movieRelevance: "upcoming",
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesActionTypes.FETCH_MOVIES_START:
    case moviesActionTypes.LOAD_MORE_MOVIES_START:
      return {
        ...state,
        isFetching: true,
      };

    case moviesActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        initMovies: action.payload,
      };

    case moviesActionTypes.LOAD_MORE_MOVIES_SUCCESS:
      const { initMovies } = state;

      return {
        ...state,
        isFetching: false,
        initMovies: [...initMovies, ...action.payload],
      };

    case moviesActionTypes.FETCH_MOVIES_FAILURE:
    case moviesActionTypes.LOAD_MORE_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
