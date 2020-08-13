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

import CustomButton from "../button/button";

import { ReactComponent as LinkIcon } from "../../assets/LinkIcon.svg";
import ImgPlaceholder from "../../assets/placeholder.jpg";

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
            src={
              backdrop_path ? tmdbBackdropPath + backdrop_path : ImgPlaceholder
            }
            alt={original_title}
          />
        </MovieImageWrapper>

        <MovieDetails>
          <MovieSubtitle>Movie Details</MovieSubtitle>
          <MovieParagraph>{overview}</MovieParagraph>
          <CustomButton movieButtonStyle>
            <LinkIcon /> <span> Visit Site</span>
          </CustomButton>
        </MovieDetails>
      </MovieDetailsContainer>
    </MovieOverviewWrapper>
  );
}
