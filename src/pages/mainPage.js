import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchMoviesStart } from "../redux/movies/movies.actions";

function MainPage({ initMovies, fetchMoviesStart, isFetching }) {
  useEffect(() => {
    console.log("MAIN PAGE");
    fetchMoviesStart();
  }, []);

  if (!initMovies) {
    return <h1>LOADING!!!!!</h1>;
  }
  return (
    <div>
      {initMovies.results.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  initMovies: state.movies.initMovies.mainMovies,
  isFetching: state.movies.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
