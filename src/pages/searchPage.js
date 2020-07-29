import React, { useEffect } from "react";
import { connect } from "react-redux";

import { queryMovieStart } from "../redux/search/search.action";

function SearchPage({ match, queryMovieStart }) {
  useEffect(() => {
    console.log("SEARCHING");

    queryMovieStart(match.params.movie);
  }, [match.params.movie]);
  return (
    <div>
      <h2>Search Result for {match.params.movie} </h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  moviesFound: state,
});
const mapDispatchToProps = (dispatch) => ({
  queryMovieStart: (query) => dispatch(queryMovieStart(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
