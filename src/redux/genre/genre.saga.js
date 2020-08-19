import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  fetchGenresSuccess,
  fetchMovieByGenreSuccess,
  fetchMovieByGenreFailure,
} from "./genre.actions";

import genreActionTypes from "./genre.types";

import { fetchRequest } from "../../api/tmbdb";

export function* fetchMovieByGenreAsync({ payload }) {
  try {
    const genreMovies =  yield call (fetchRequest, )
  } catch (error) {
    yield put(fetchMovieByGenreFailure(error));
  }
}

export function* fetchGenresAsync() {
  try {
    const genres = yield call(fetchRequest, `/genre/movie/list`);

    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    console.log(error);
  }
}

export function* onfetchMovieByGenreStart() {
  yield takeLatest(
    genreActionTypes.FETCH_MOVIE_BY_GENRE_START,
    fetchMovieByGenreAsync
  );
}

export function* onfetchGenreStart() {
  yield takeLatest(genreActionTypes.FETCH_GENRES_START, fetchGenresAsync);
}

export function* genreSaga() {
  yield all([call(onfetchMovieByGenreStart), call(onfetchGenreStart)]);
}
