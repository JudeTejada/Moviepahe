import React from "react";

import {
  MovieDetailsWrapper,
  MovieDetailList,
  MovieDetailTitle,
  MovieDetailSubtitle,
  MovieSubTitleList,
} from "./MovieDetails.styled";

export default function MovieDetails({ movie }) {
  const { genres, release_date, status, vote_average } = movie;

  return (
    <MovieDetailsWrapper>
      <MovieDetailList className="genre">
        <MovieDetailTitle>Genre</MovieDetailTitle>
        {genres.map((genre) => (
          <MovieSubTitleList key={genre.id}>{genre.name}</MovieSubTitleList>
        ))}
      </MovieDetailList>

      <MovieDetailList className="release_date">
        <MovieDetailTitle>Release Date</MovieDetailTitle>
        <MovieDetailSubtitle>{release_date}</MovieDetailSubtitle>
      </MovieDetailList>
      <MovieDetailList className="status">
        <MovieDetailTitle>status</MovieDetailTitle>
        <MovieDetailSubtitle>{status}</MovieDetailSubtitle>
      </MovieDetailList>
      <MovieDetailList className="vote-average">
        <MovieDetailTitle>Rating</MovieDetailTitle>
        <MovieDetailSubtitle>{vote_average}</MovieDetailSubtitle>
      </MovieDetailList>
    </MovieDetailsWrapper>
  );
}
