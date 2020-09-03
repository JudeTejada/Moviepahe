import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  fetchDiscoverSuccess,
  fetchDiscoverFailure,
  loadMoreMovieFinish,
  loadMoreMovieFailure,
  hasMoreMovies,
} from "./discover.actions";
import discoverActionTypes from "./discover.types";

import { fetchRequest } from "../../api/tmbdb";

export function* fetchDiscoverMoviesStartAsync({ payload }) {
  try {
    const movies = yield call(fetchRequest, payload, 1);

    yield put(fetchDiscoverSuccess(movies.results));
  } catch (error) {
    yield put(fetchDiscoverFailure(error));
  }
}

export function* loadMoreMovies({ payload }) {
  const { query, page } = payload;
  try {
    const movies = yield call(fetchRequest, query, page);
    if (page === movies.total_pages) yield put(hasMoreMovies());
    yield put(loadMoreMovieFinish(movies.results));
  } catch (err) {
    yield put(loadMoreMovieFailure(err));
  }
}

export function* fetchDiscoverMoviesStart() {
  yield takeLatest(
    discoverActionTypes.FETCH_DISCOVER_START,
    fetchDiscoverMoviesStartAsync
  );
}

export function* onLoadMoreMovies() {
  yield takeLatest(
    discoverActionTypes.LOAD_MORE_MOVIES_DISCOVER_START,
    loadMoreMovies
  );
}

export function* discoverSaga() {
  yield all([call(fetchDiscoverMoviesStart), call(onLoadMoreMovies)]);
}
