import React from "react";

import {
  MovieTitle,
  MovieDetailsContainer,
  MovieImage,
  MovieSubtitle,
  MovieImageWrapper,
  MovieDetails,
  MovieOverviewWrapper,
  MovieParagraph,
} from "./MovieOverview.styled";

export default function MovieOverview({
  movie: { backdrop_path, overview, original_title },
}) {
  const tmdbBackdropPath = "https://image.tmdb.org/t/p/original";
  //   console.log("MOVIE", movie.original_title);
  return (
    <MovieOverviewWrapper>
      <MovieTitle>{original_title}</MovieTitle>
      <MovieDetailsContainer>
        <MovieImageWrapper>
          <MovieImage
            src={tmdbBackdropPath + backdrop_path}
            alt={original_title}
          />
        </MovieImageWrapper>

        <MovieDetails>
          <MovieSubtitle>Movie Details</MovieSubtitle>
          <MovieParagraph>{overview}</MovieParagraph>
        </MovieDetails>
      </MovieDetailsContainer>
    </MovieOverviewWrapper>
  );
}
