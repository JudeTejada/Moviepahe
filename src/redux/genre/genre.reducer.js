import genreActionTypes from "./genre.types";

const initialState = {
  genreMovies: [],
  isFetching: false,
  errorMessage: undefined,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case genreActionTypes.FETCH_GENRE_START:
      return {
        ...state,
        isFetching: true,
      };

    case genreActionTypes.FETCH_GENRE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        genreMovies: action.payload,
      };

    case genreActionTypes.FETCH_GENRE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default genreReducer;
