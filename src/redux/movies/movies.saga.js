import {
  takeLatest,
  takeEvery,
  call,
  put,
  all,
  delay,
} from "redux-saga/effects";

import { fetchMoviesSuccess, fetchMoviesFailure } from "./movies.actions";

import moviesActionTypes from "./movies.types";

import { fetchRequest } from "../../api/tmbdb";

function updateQuery(year, sort, genre) {
  const yearFilter = year ? `&year=${year}&first_air_date_year=${year}` : "";
  const sortFilter = sort ? `&sort_by=${sort}` : "";
  const genreFilter = genre ? `&with_genres=${genre}` : "";
  return `${yearFilter}${sortFilter}${genreFilter}`;
}
export function* fetchMoviesAsync({ payload }) {
  try {
    const mainMovies = yield call(fetchRequest, `/movie/${payload}`, 1);

    yield delay(1200);
    // yield put({
    //   type: moviesActionTypes.FETCH_MOVIES_SUCCESS,
    //   payload: {
    //     mainMovies: mainMovies.results,
    //   },
    // });
    yield put(fetchMoviesSuccess(mainMovies.results));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* updateFilterQuerySaga({ payload }) {
  try {
  } catch (err) {}
}

export function* loadMoreMovies({ payload }) {
  const { type, page } = payload;
  try {
  } catch (err) {}
}

export function* fetchMoviesStart() {
  yield takeLatest(moviesActionTypes.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* onLoadMoreMovies() {
  yield takeLatest(moviesActionTypes.LOAD_MORE_MOVIES_START, loadMoreMovies);
}
export function* onSortMovies() {
  yield takeEvery(
    [moviesActionTypes.SET_SORT_FILTER, moviesActionTypes.SET_YEAR_FILTER],
    updateFilterQuerySaga
  );
}

export function* moviesSaga() {
  yield all([
    call(fetchMoviesStart),
    call(onLoadMoreMovies),
    call(onSortMovies),
  ]);
}
