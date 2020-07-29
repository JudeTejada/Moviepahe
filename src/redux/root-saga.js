import { all, call } from "redux-saga/effects";

import { moviesSaga } from "./movies/movies.saga";
import { searchSaga } from "./search/search.sagas";
export default function* rootSaga() {
  yield all([call(moviesSaga), call(searchSaga)]);
}
