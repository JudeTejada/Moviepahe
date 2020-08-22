import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as lodash from "lodash";
import {
  queryMovieStart,
  loadMoreMoviesStart,
} from "../redux/search/search.action";

import { HeadingOne } from "../util/global.styles";

import CustomButton from "../components/button/button";
import MovieList from "../components/movieList/movieList";

function SearchPage({
  match,
  queryMovieStart,
  moviesFound,
  isLoading,
  errorMessage,
  loadMoreMoviesStart,
}) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    queryMovieStart(match.params.movie);
  }, [match.params.movie]);

  const loadMore = () => {
    setPage(page + 1);

    loadMoreMoviesStart(match.params.movie, page);
  };

  const handleScroll = (event) => {
    const elm = event.target;

    console.log("SCROLLING");
    // // const { loadMoreActionCreator } = this.props;
    // const { page } = this.state;
    // const element = event.target;
    // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //   // loadMoreActionCreator(currentCount);
    //   // this.setState({
    //   //   currentCount: currentCount + 20,
    //   // });
    // }
    // console.log("LOADING");
  };

  if (errorMessage) {
    return <h1>Sorry Something Went wrong with the Page</h1>;
  }

  if (lodash.isEmpty(moviesFound) && isLoading) return <h1>Searching......</h1>;

  console.log(isLoading);
  return (
    <>
      <div onScroll={handleScroll}>
        <HeadingOne>Search Result for {match.params.movie} </HeadingOne>
        <MovieList movies={moviesFound} />
        <CustomButton onClick={loadMore} loadMorebutton>
          {!isLoading ? "Load More Movies" : "Loading..."}
        </CustomButton>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  moviesFound: state.search.moviesFound,
  isLoading: state.search.isLoading,
  errorMessage: state.search.errorMessage,
});
const mapDispatchToProps = (dispatch) => ({
  queryMovieStart: (query) => dispatch(queryMovieStart(query)),
  loadMoreMoviesStart: (query, page) =>
    dispatch(loadMoreMoviesStart(query, page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
