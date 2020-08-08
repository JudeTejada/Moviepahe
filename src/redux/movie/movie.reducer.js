import movieActionTypes from "./movie.types";

const initialState = {
  movies: [],
  isFetching: false,
  errorMessage: undefined,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieActionTypes.FETCH_MOVIE_START:
      return {
        ...state,
        isFetching: true,
      };

    case movieActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: action.payload,
      };

    case movieActionTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
