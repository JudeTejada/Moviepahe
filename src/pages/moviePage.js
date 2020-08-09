import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchMovieStart } from "../redux/movie/movie.action";
function MoviePage({ fetchMovieStart, match }) {
  useEffect(() => {
    fetchMovieStart({
      category: "movie",
      id: match.params.id,
    });
  }, [match.params.id]);

  return (
    <div>
      <h1>SINGLE MOVIE PAGE</h1>
      <h3>{match.params.id}</h3>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieStart: (data) => dispatch(fetchMovieStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
