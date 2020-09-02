import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as lodash from "lodash";
import {
  fetchMoviesStart,
  loadMoreMoviesStart,
} from "../../redux/movies/movies.actions";

import MovieList from "../movieList/movieList";
import Loader from "../loader/Loader";
import CustomButton from "../button/button";
import { loadMoreMovies } from "../../redux/movies/movies.saga";

function MovieRelevance({
  initMovies,
  fetchMoviesStart,
  loadMoreMoviesStart,
  isFetching,
  filterBy,
  errorMessage,
}) {
  const queryDiscover = "/discover/movie?";
  const [page, setPage] = useState(2);

  useEffect(() => {
    const { query } = filterBy;
    fetchMoviesStart(`${queryDiscover}${query}`);
    setPage(2);
  }, [filterBy.query]);

  const loadMore = () => {
    const { query } = filterBy;
    setPage((p) => p + 1);
    console.log(page);
    loadMoreMoviesStart(`${queryDiscover}${query}`, page);
  };

  if (errorMessage) return <h1>Sorry Something Went wrong with the Page</h1>;
  if (lodash.isEmpty(initMovies) && isFetching) return <Loader />;

  return (
    <>
      <MovieList movies={initMovies} />
      <CustomButton onClick={loadMore} loadMorebutton>
        {!isFetching ? "Load More Movies" : "Loading..."}
      </CustomButton>
    </>
  );
}

const mapStateToProps = (state) => ({
  initMovies: state.movies.initMovies,
  isFetching: state.movies.isFetching,
  filterBy: state.filter.filterBy,
  errorMessage: state.movies.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesStart: (query) => dispatch(fetchMoviesStart(query)),
  loadMoreMoviesStart: (query, page) =>
    dispatch(loadMoreMoviesStart(query, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRelevance);
