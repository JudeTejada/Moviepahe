import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchMoviesStart } from "../../redux/movies/movies.actions";

import MovieList from "../movieList/movieList";

function MovieRelevance({
  initMovies,
  fetchMoviesStart,
  isFetching,
  movieRelevance,
}) {
  useEffect(() => {
    fetchMoviesStart(movieRelevance);
  }, [movieRelevance]);

  return !initMovies ? (
    <h1>Loading</h1>
  ) : (
    <MovieList movies={initMovies.results} />
  );
}

const mapStateToProps = (state) => ({
  initMovies: state.movies.initMovies.mainMovies,
  isFetching: state.movies.isFetching,
  movieRelevance: state.movies.movieRelevance,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesStart: (option) => dispatch(fetchMoviesStart(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRelevance);
