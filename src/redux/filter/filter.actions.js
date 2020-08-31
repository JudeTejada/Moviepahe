import filterActionTypes from "./filter.types";

export const setYearFilter = (year) => ({
  type: filterActionTypes.SET_YEAR_FILTER,
  payload: year,
});

export const setSortFilter = (sort) => ({
  type: filterActionTypes.SET_SORT_FILTER,
  payload: sort,
});

export const setGenreFilter = (genre) => ({
  type: filterActionTypes.SET_GENRE_FILTER,
  payload: genre,
});
