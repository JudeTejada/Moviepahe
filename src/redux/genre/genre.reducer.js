import genreActionTypes from "./genre.types";

const initialState = {
  genreMovies: [],
  genres: [],
  isFetching: false,
  errorMessage: undefined,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case genreActionTypes.FETCH_MOVIE_BY_GENRE_START:
      return {
        ...state,
        isFetching: true,
      };

    case genreActionTypes.FETCH_MOVIE_BY_GENRE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        genreMovies: action.payload,
      };

    case genreActionTypes.FETCH_MOVIE_BY_GENRE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case genreActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

export default genreReducer;
