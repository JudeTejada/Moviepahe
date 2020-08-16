import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGenreStart } from "../redux/genre/genre.actions";

function GenrePage({ match, fetchGenreStart }) {
  useEffect(() => {
    fetchGenreStart(match.params.movieGenre);
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
  fetchGenreStart: (genre) => dispatch(fetchGenreStart(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenrePage);
