import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovieByGenreStart } from "../redux/genre/genre.actions";

function GenrePage({ match, fetchMovieByGenreStart, ...props }) {
  console.log(props);

  useEffect(() => {

    fetchMovieByGenreStart(match.params.movieGenre);
  }, [match.params.movieGenre]);
  return (
    <div>
      <h2>Genre Page</h2>
      <p>{match.params.movieGenre}</p>
    </div>
  );
}
const mapStateToProps = (state) => ({
  moviesFound: state.search.moviesFound,
  isLoading: state.search.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMovieByGenreStart: (genre) => dispatch(fetchMovieByGenreStart(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenrePage);
