import { takeLatest, call, put, all } from "redux-saga/effects";

import personActionTypes from "./person.types";

import { fetchPersonFailure, fetchPersonSuccess } from "./person.actions";

import * as api from "../../api/tmbdb";

export function* fetchPersonDetail({ payload }) {
  const { category, id } = payload;
  try {
    const [person, casting] = yield all([
      call(api.fetchSingleRequest, category, id),
      call(api.fetchPersonCasting, id),
    ]);

    yield put(fetchPersonSuccess({ person, casting }));
  } catch (err) {
    yield put(fetchPersonFailure(err));
  }
}

export function* onFetchperson() {
  yield takeLatest(personActionTypes.FETCH_PERSON_START, fetchPersonDetail);
}

export function* personSaga() {
  yield all([call(onFetchperson)]);
}
