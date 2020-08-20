import React, { useEffect } from "react";
import { connect } from "react-redux";

import { queryMovieStart } from "../redux/search/search.action";

import { HeadingOne } from "../util/global.styles";

import MovieList from "../components/movieList/movieList";

function SearchPage({ match, queryMovieStart, moviesFound, isLoading }) {
  useEffect(() => {
    console.log("SEARCHING");

    queryMovieStart(match.params.movie);
  }, [match.params.movie]);

  return (
    <>
      {!moviesFound.results ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <HeadingOne>Search Result for {match.params.movie} </HeadingOne>
          <MovieList movies={moviesFound.results} />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  moviesFound: state.search.moviesFound,
  isLoading: state.search.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  queryMovieStart: (query) => dispatch(queryMovieStart(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
