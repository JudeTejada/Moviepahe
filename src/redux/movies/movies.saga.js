import { takeLatest, call, put, all } from "redux-saga/effects";

import { fetchMoviesSuccess, fetchMoviesFailure } from "./movies.actions";

import moviesActionTypes from "./movies.types";

export function* fetchMoviesAsync() {
  console.log('I"M FIRED');
  try {
    console.log("FETCHING MOVIES");
  } catch (error) {
    fetchMoviesFailure(error);
  }
}

export function* fetchMoviesStart() {
  yield takeLatest(moviesActionTypes.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* moviesSaga() {
  yield all([call(fetchMoviesStart)]);
}
