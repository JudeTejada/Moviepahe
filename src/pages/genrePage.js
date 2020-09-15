import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as lodash from "lodash";

import {
  fetchMovieByGenreStart,
  loadMoreMoviesStart,
} from "../redux/genre/genre.actions";

import { HeadingOne } from "../util/global.styles";

import MovieList from "../components/movieList/movieList";
import Loader from "../components/loader/Loader";
import CustomButton from "../components/button/button";

function GenrePage({
  match,
  errorMessage,
  fetchMovieByGenreStart,
  loadMoreMoviesStart,
  genreMovies,
  hasMore,
  isFetching,
}) {
  const query = `/discover/movie?&with_genres=${match.params.genreId}`;
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovieByGenreStart(query);
  }, [match.params.movieGenre, fetchMovieByGenreStart, query]);

  const loadMore = () => {
    setPage((p) => p + 1);
    loadMoreMoviesStart(query, page);
  };

  if (errorMessage) return <h1>Sorry Something Went wrong with the Page</h1>;
  if (lodash.isEmpty(genreMovies) && isFetching) return <Loader />;

  return (
    <div>
      <>
        <HeadingOne>{match.params.movieGenre}</HeadingOne>
        {genreMovies && <MovieList movies={genreMovies} />}

        {hasMore && (
          <CustomButton onClick={loadMore} loadMorebutton>
            {!isFetching ? "Load More Movies" : "Loading..."}
          </CustomButton>
        )}
      </>
    </div>
  );
}
const mapStateToProps = (state) => ({
  genreMovies: state.genre.genreMovies,
  isFetching: state.genre.isFetching,
  hasMore: state.genre.hasMore,
  errorMessage: state.genre.errorMessage,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMovieByGenreStart: (genre) => dispatch(fetchMovieByGenreStart(genre)),
  loadMoreMoviesStart: (genre, page) =>
    dispatch(loadMoreMoviesStart(genre, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenrePage);
