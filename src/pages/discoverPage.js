import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as lodash from "lodash";
import { fetchDiscoverStart } from "../redux/discover/discover.actions";

import Loader from "../components/loader/Loader";
import MovieList from "../components/movieList/movieList";

import { HeadingOne } from "../util/global.styles";

function DiscoverPage({
  match,
  fetchDiscoverStart,
  isFetching,
  discoverMovies,
  errorMessage,
}) {
  useEffect(() => {
    fetchDiscoverStart(match.params.discoverType);
  }, [match.params.discoverType, fetchDiscoverStart]);

  if (errorMessage) return <h1>Sorry Something Went wrong with the Page</h1>;
  if (lodash.isEmpty(discoverMovies) && isFetching) return <Loader />;
  return (
    <div>
      <HeadingOne>{match.params.discoverType} Movies</HeadingOne>
      <MovieList movies={discoverMovies} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  isFetching: state.discover.isFetching,
  discoverMovies: state.discover.discoverMovies,
  errorMessage: state.discover.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDiscoverStart: (discover) => dispatch(fetchDiscoverStart(discover)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
