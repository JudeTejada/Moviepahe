import movieActionTypes from "./movie.types";

const initialState = {
  movie: null,
  similars: null,
  reviews: null,
  credits: null,
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
        movie: action.payload.movieDetails,
        credits: action.payload.credits,
        reviews: action.payload.reviews,
        similars: action.payload.similar,
      };

    case movieActionTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case movieActionTypes.INIT_MAIN:
      return {
        ...state,
        initMain: true,
      };
    default:
      return state;
  }
};

export default movieReducer;
