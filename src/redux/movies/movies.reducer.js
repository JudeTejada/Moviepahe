import moviesActionTypes from "./movies.types";

const initialState = {
  initMovies: [],
  isFetching: false,
  errorMessage: undefined,
  movieRelevance: "upcoming",
  discover: {
    genre: "",
    sort: "",
    year: "",
    query: "",
  },
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
      return {
        ...state,
        isFetching: false,
        initMovies: [...state.initMovies, action.payload],
      };

    case moviesActionTypes.FETCH_MOVIES_FAILURE:
    case moviesActionTypes.LOAD_MORE_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case moviesActionTypes.SET_YEAR_FILTER:

    default:
      return state;
  }
};

export default moviesReducer;
