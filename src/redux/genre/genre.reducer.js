import genreActionTypes from "./genre.types";

const initialState = {
  genreMovies: [],
  genres: [],
  isFetching: false,
  errorMessage: undefined,
  hasMore: true,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case genreActionTypes.FETCH_MOVIE_BY_GENRE_START:
    case genreActionTypes.LOAD_MORE_MOVIES_GENRE_START:
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

    case genreActionTypes.LOAD_MORE_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        genreMovies: [...state.genreMovies, ...action.payload],
      };

    case genreActionTypes.FETCH_MOVIE_BY_GENRE_FAILURE:
    case genreActionTypes.LOAD_MORE_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case genreActionTypes.HAS_MORE_MOVIES:
      return {
        ...state,
        isFetching: false,
        hasMore: false,
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
