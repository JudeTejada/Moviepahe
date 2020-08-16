import { takeLatest, call, put, all } from "redux-saga/effects";

import { fetchGenreFailure, fetchGenreSuccess } from "./genre.actions";

import genreActionTypes from "./genre.types";

import { fetchRequest } from "../../api/tmbdb";

export function* fetchMovieByGenreAsync({ payload }) {
  try {
    console.log(payload);
  } catch (error) {
    yield put(fetchGenreFailure(error));
  }
}

export function* fetchMovieByGenreStart() {
  yield takeLatest(genreActionTypes.FETCH_GENRE_START, fetchMovieByGenreAsync);
}

export function* genreSaga() {
  yield all([call(fetchMovieByGenreStart)]);
}
