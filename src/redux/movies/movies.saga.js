import { takeLatest, call, put, all } from "redux-saga/effects";

import { fetchMoviesSuccess, fetchMoviesFailure } from "./movies.actions";

import moviesActionTypes from "./movies.types";

import { fetchRequest } from "../../api/tmbdb";

export function* fetchMoviesAsync({ payload }) {
  try {
    const mainMovies = yield call(fetchRequest, `/movie/${payload}`, 1);

    yield put({
      type: moviesActionTypes.FETCH_MOVIES_SUCCESS,
      payload: {
        mainMovies,
      },
    });
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* fetchMoviesStart() {
  yield takeLatest(moviesActionTypes.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* moviesSaga() {
  yield all([call(fetchMoviesStart)]);
}
