import { takeLatest, call, put, all, delay, select } from "redux-saga/effects";

import { fetchMoviesSuccess, fetchMoviesFailure } from "./movies.actions";

import moviesActionTypes from "./movies.types";

import { fetchRequest } from "../../api/tmbdb";

export function* fetchMoviesAsync({ payload }) {
  try {
    const mainMovies = yield call(fetchRequest, `${payload}`, 1);

    yield delay(1200);

    yield put(fetchMoviesSuccess(mainMovies.results));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* loadMoreMovies({ payload }) {
  // const { type, page } = payload;
  try {
    // const state = yield select();
  } catch (err) {}
}

export function* fetchMoviesStart() {
  yield takeLatest(moviesActionTypes.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* onLoadMoreMovies() {
  yield takeLatest(moviesActionTypes.LOAD_MORE_MOVIES_START, loadMoreMovies);
}

export function* moviesSaga() {
  yield all([call(fetchMoviesStart), call(onLoadMoreMovies)]);
}
