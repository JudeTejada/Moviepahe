import React from "react";

import {
  MovieDetailsWrapper,
  MovieDetailList,
  MovieDetailTitle,
  MovieDetailSubtitle,
  MovieSubTitleList,
} from "./MovieDetails.styled";

import { numberWithCommas, toHrsMins } from "../../util/util";

export default function MovieDetails({ movie }) {
  const {
    genres,
    release_date,
    status,
    vote_average,
    runtime,
    revenue,
  } = movie;

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

      <MovieDetailList className="vote-average">
        <MovieDetailTitle>Runtime</MovieDetailTitle>
        <MovieDetailSubtitle>{toHrsMins(runtime)}</MovieDetailSubtitle>
      </MovieDetailList>

      <MovieDetailList className="vote-average">
        <MovieDetailTitle>Revenue</MovieDetailTitle>
        <MovieDetailSubtitle>${numberWithCommas(revenue)}</MovieDetailSubtitle>
      </MovieDetailList>
    </MovieDetailsWrapper>
  );
}
