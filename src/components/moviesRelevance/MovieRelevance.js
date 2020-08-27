import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchMoviesStart } from "../../redux/movies/movies.actions";

import MovieList from "../movieList/movieList";
import Loader from "../loader/Loader";
function MovieRelevance({
  initMovies,
  fetchMoviesStart,
  isFetching,
  movieRelevance,
}) {
  useEffect(() => {
    fetchMoviesStart(movieRelevance);
  }, [movieRelevance]);

  return !initMovies ? <Loader /> : <MovieList movies={initMovies.results} />;
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
