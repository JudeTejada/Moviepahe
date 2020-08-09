import { takeLatest, call, put, all } from "redux-saga/effects";

import movieActionTypes from "./movie.types";

import { fetchMovieSuccess, fetchMovieFailure } from "./movie.action";

import { fetchSingleRequest } from "../../api/tmbdb";

export function* fetchMovieDetail({ payload }) {
  const { category, id } = payload;
  try {
    const movieDetails = yield call(fetchSingleRequest, category, id);

    console.log("MOVIEDETAILS", movieDetails);
  } catch (err) {
    yield put(fetchMovieFailure(err));
  }
}

export function* onFetchMovie() {
  yield takeLatest(movieActionTypes.FETCH_MOVIE_START, fetchMovieDetail);
}

export function* movieSaga() {
  yield all([call(onFetchMovie)]);
}
