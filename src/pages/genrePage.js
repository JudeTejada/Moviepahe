import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovieByGenreStart } from "../redux/genre/genre.actions";

import { HeadingOne } from "../util/global.styles";
import MovieList from "../components/movieList/movieList";

function GenrePage({ match, fetchMovieByGenreStart, genreMovies }) {
  console.log("movies Found", genreMovies);
  const query = `/discover/movie?&with_genres=${match.params.genreId}`;
  useEffect(() => {
    fetchMovieByGenreStart(query);
  }, [match.params.movieGenre]);
  return (
    <div>
      <HeadingOne>{match.params.movieGenre}</HeadingOne>
      <p>{genreMovies.total_results} movies found</p>
      {!genreMovies.results ? (
        <h1>Loading</h1>
      ) : (
        <MovieList movies={genreMovies.results} />
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  genreMovies: state.genre.genreMovies,
  isLoading: state.genre.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMovieByGenreStart: (genre) => dispatch(fetchMovieByGenreStart(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenrePage);
