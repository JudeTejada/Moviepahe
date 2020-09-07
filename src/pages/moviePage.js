import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchMovieStart } from "../redux/movie/movie.action";

import MovieOverview from "../components/movieOverview/MovieOverview";
import MovieCasts from "../components/movieCasts/MovieCasts";
import SimilarMovies from "../components/similarMovies/SimilarMovies";
import Reviews from "../components/reviews/Reviews";
import Loader from "../components/loader/Loader";

import { ContainerWrapper } from "../util/global.styles";

function MoviePage({
  fetchMovieStart,
  match,
  movie,
  isFetching,
  similars,
  credits,
  reviews,
}) {
  useEffect(() => {
    fetchMovieStart({
      category: "movie",
      id: match.params.id,
    });
  }, [match.params.id, fetchMovieStart]);

  return !isFetching ? (
    <ContainerWrapper>
      {movie && <MovieOverview movie={movie} />}
      {credits && <MovieCasts casts={credits} movie={movie} />}
      {similars && (
        <>
          {similars.results.length !== 0 && <SimilarMovies movies={similars} />}
        </>
      )}
      {reviews && <Reviews reviews={reviews} />}
    </ContainerWrapper>
  ) : (
    <Loader />
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie.movie,
  similars: state.movie.similars,
  reviews: state.movie.reviews,
  credits: state.movie.credits,
  isFetching: state.movie.isFetching,
  errorMessage: state.movie.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieStart: (data) => dispatch(fetchMovieStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
