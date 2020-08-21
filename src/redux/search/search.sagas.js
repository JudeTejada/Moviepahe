import { takeLatest, call, put, all } from "redux-saga/effects";

import searchActionTypes from "./search.types";

import { fetchMovie } from "../../api/tmbdb";

import { queryMovieFinish, queryMovieFailure } from "./search.action";

export function* searchStart({ payload }) {
  const { query, page } = payload;
  try {
    console.log(page, query);
    const data = yield call(fetchMovie, query, page);

    console.log(data);
    yield put(queryMovieFinish(data));
  } catch (err) {
    yield put(queryMovieFailure(err));
  }
}

export function* onSearchStart() {
  yield takeLatest(searchActionTypes.QUERY_MOVIE_START, searchStart);
}

export function* searchSaga() {
  yield all([call(onSearchStart)]);
}
