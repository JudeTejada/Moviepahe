import { takeLatest, call, put, all } from "redux-saga/effects";

import { fetchDiscoverSuccess, fetchDiscoverFailure } from "./discover.actions";
import discoverActionTypes from "./discover.types";

import { fetchRequest } from "../../api/tmbdb";

export function* fetchDiscoverMoviesStartAsync({ payload }) {
  try {
    const movies = yield call(fetchRequest, `/movie/${payload}`, 1);

    console.log("DISCOVER SAGA");
    yield put(fetchDiscoverSuccess(movies.results));
  } catch (error) {
    yield put(fetchDiscoverFailure(error));
  }
}

export function* fetchDiscoverMoviesStart() {
  yield takeLatest(
    discoverActionTypes.FETCH_DISCOVER_START,
    fetchDiscoverMoviesStartAsync
  );
}

export function* discoverSaga() {
  yield all([call(fetchDiscoverMoviesStart)]);
}
