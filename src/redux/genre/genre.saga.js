import { takeLatest, call, put, all, delay } from "redux-saga/effects";

import {
  fetchGenresSuccess,
  fetchMovieByGenreSuccess,
  fetchMovieByGenreFailure,
  loadMoreMovieFinish,
  loadMoreMovieFailure,
  hasMoreMovies,
} from "./genre.actions";

import genreActionTypes from "./genre.types";

import { fetchRequest } from "../../api/tmbdb";

export function* fetchMovieByGenreAsync({ payload }) {
  try {
    const genreMovies = yield call(fetchRequest, payload);
    yield delay(1000);
    console.log(genreMovies);
    yield put(fetchMovieByGenreSuccess(genreMovies.results));
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

export function* LoadMoreMoviesAsync({ payload }) {
  const { genre, page } = payload;
  try {
    const movies = yield call(fetchRequest, genre, page);
    if (page === movies.total_pages) yield put(hasMoreMovies());
    yield put(loadMoreMovieFinish(movies.results));
  } catch (err) {
    yield put(loadMoreMovieFailure(err));
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

export function* onLoadmoreMovies() {
  yield takeLatest(
    genreActionTypes.LOAD_MORE_MOVIES_GENRE_START,
    LoadMoreMoviesAsync
  );
}

export function* genreSaga() {
  yield all([
    call(onfetchMovieByGenreStart),
    call(onfetchGenreStart),
    call(onLoadmoreMovies),
  ]);
}
