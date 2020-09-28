import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as lodash from "lodash";
import { Helmet } from "react-helmet";

import {
  queryMovieStart,
  loadMoreMoviesStart,
} from "../redux/search/search.action";

import { HeadingOne } from "../util/global.styles";

import CustomButton from "../components/button/button";
import MovieList from "../components/movieList/movieList";
import Loader from "../components/loader/Loader";

function SearchPage({
  match,
  queryMovieStart,
  moviesFound,
  isLoading,
  hasMore,
  errorMessage,
  loadMoreMoviesStart,
}) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    queryMovieStart(match.params.movie);
  }, [match.params.movie, queryMovieStart]);

  const loadMore = () => {
    setPage((p) => p + 1);
    loadMoreMoviesStart(match.params.movie, page);
  };

  if (errorMessage) return <h1>Sorry Something Went wrong with the Page</h1>;
  if (lodash.isEmpty(moviesFound) && isLoading) return <Loader />;

  return (
    <div>
      <Helmet>
        <title>{`${match.params.movie} - search results`}</title>
      </Helmet>

      <HeadingOne>Search Result for {match.params.movie} </HeadingOne>
      <MovieList movies={moviesFound} />

      {hasMore && (
        <CustomButton onClick={loadMore} loadMorebutton>
          {!isLoading ? "Load More Movies" : "Loading..."}
        </CustomButton>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  moviesFound: state.search.moviesFound,
  isLoading: state.search.isLoading,
  errorMessage: state.search.errorMessage,
  hasMore: state.search.hasMore,
});
const mapDispatchToProps = (dispatch) => ({
  queryMovieStart: (query) => dispatch(queryMovieStart(query)),
  loadMoreMoviesStart: (query, page) =>
    dispatch(loadMoreMoviesStart(query, page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
