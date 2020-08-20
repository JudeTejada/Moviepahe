import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovieByGenreStart } from "../redux/genre/genre.actions";

import { HeadingOne } from "../util/global.styles";
import MovieList from "../components/movieList/movieList";

function GenrePage({ match, fetchMovieByGenreStart, genreMovies, isFetching }) {
  console.log("movies Found", isFetching);
  const query = `/discover/movie?&with_genres=${match.params.genreId}`;
  useEffect(() => {
    fetchMovieByGenreStart(query);
  }, [match.params.movieGenre]);
  return (
    <div>
      {isFetching ? (
        <h1>Loading</h1>
      ) : (
        <>
          <HeadingOne>{match.params.movieGenre}</HeadingOne>
          <p>{genreMovies.total_results} movies found</p>
          {genreMovies.results && <MovieList movies={genreMovies.results} />}
        </>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  genreMovies: state.genre.genreMovies,
  isFetching: state.genre.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMovieByGenreStart: (genre) => dispatch(fetchMovieByGenreStart(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenrePage);
