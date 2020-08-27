import { takeLatest, call, put, all } from "redux-saga/effects";

import movieActionTypes from "./movie.types";

import { fetchMovieSuccess, fetchMovieFailure } from "./movie.action";

import * as api from "../../api/tmbdb";

export function* fetchMovieDetail({ payload }) {
  const { category, id } = payload;
  try {
    const [movieDetails, credits, reviews, similar] = yield all([
      call(api.fetchSingleRequest, category, id),
      call(api.fetchMovieCredits, category, id),
      call(api.fetchMovieReviews, category, id),
      call(api.fetchSimilarMovies, category, id),
    ]);

    yield put(fetchMovieSuccess({ movieDetails, credits, reviews, similar }));
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
