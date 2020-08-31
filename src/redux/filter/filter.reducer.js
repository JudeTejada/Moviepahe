import filterActionTypes from "./filter.types";

const initialState = {
  filterBy: {
    genre: "",
    sort: "",
    year: "",
    query: "",
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterActionTypes.SET_GENRE_FILTER:
      console.log(action.payload);
      return {
        ...state,
        filterBy: { ...state.filterBy, genre: action.payload },
      };

    case filterActionTypes.SET_YEAR_FILTER:
      console.log(action.payload);
      return {
        ...state,
        filterBy: { ...state.filterBy, year: action.payload },
      };

    case filterActionTypes.SET_SORT_FILTER:
      console.log(action.payload);
      return {
        ...state,
        filterBy: { ...state.filterBy, sort: action.payload },
      };

    case filterActionTypes.UPDATE_QUERY:
      return {
        ...state,
        filterBy: { ...state.filterBy, query: action.payload },
      };

    default:
      return state;
  }
};

export default filterReducer;
