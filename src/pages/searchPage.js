import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { queryMovieStart } from "../redux/search/search.action";

import { HeadingOne } from "../util/global.styles";

import MovieList from "../components/movieList/movieList";

function SearchPage({ match, queryMovieStart, moviesFound, isLoading }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    queryMovieStart(match.params.movie, page);
  }, [match.params.movie, page]);

  const loadMore = () => {
    setPage(page + 1);

    console.log(page);
  };
  return (
    <>
      {!moviesFound.results ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <HeadingOne>Search Result for {match.params.movie} </HeadingOne>
          <MovieList movies={moviesFound.results} />
          {isLoading && <h1>Loading More Movies</h1>}
          <button onClick={loadMore}>Load More Movies</button>
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
  queryMovieStart: (query, page) => dispatch(queryMovieStart(query, page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
