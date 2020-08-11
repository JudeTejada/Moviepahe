import { all, call } from "redux-saga/effects";

import { moviesSaga } from "./movies/movies.saga";
import { searchSaga } from "./search/search.sagas";
import { movieSaga } from "./movie/movie.saga";
import { personSaga } from "./person/person.saga";

export default function* rootSaga() {
  yield all([
    call(moviesSaga),
    call(searchSaga),
    call(movieSaga),
    call(personSaga),
  ]);
}
