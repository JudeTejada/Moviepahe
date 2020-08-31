import { takeEvery, call, put, all, select } from "redux-saga/effects";

import filterActionTypes from "./filter.types";

function updateQuery(year, sort, genre) {
  const yearFilter = year ? `&year=${year}&first_air_date_year=${year}` : "";
  const sortFilter = sort ? `&sort_by=${sort}` : "";
  const genreFilter = genre ? `&with_genres=${genre}` : "";
  return `${yearFilter}${sortFilter}${genreFilter}`;
}
export function* updateFilterQuerySaga({ payload }) {
  try {
    const state = yield select();

    const { year, sort, genre } = state.filter.filterBy;

    const query = updateQuery(year, sort, genre);
    console.log("FILTER SAGA QUERY", query);
    yield put({ type: filterActionTypes.UPDATE_QUERY, payload: query });
  } catch (err) {
    console.log(err);
  }
}

export function* onSortMovies() {
  yield takeEvery(
    [
      filterActionTypes.SET_SORT_FILTER,
      filterActionTypes.SET_YEAR_FILTER,
      filterActionTypes.SET_GENRE_FILTER,
    ],
    updateFilterQuerySaga
  );
}

export function* filterSaga() {
  yield all([call(onSortMovies)]);
}
