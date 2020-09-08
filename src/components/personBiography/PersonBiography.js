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
} from "../movieOverview/MovieOverview.styled";

import ImgPlaceholder from "../../assets/placeholder.jpg";

export default function PersonBiography({ actor }) {
  const tmdbPosterPath = "https://image.tmdb.org/t/p/w300_and_h450_face/";
  const { biography, name, profile_path } = actor;
  return (
    <MovieOverviewWrapper>
      <MovieTitle>{name}</MovieTitle>
      <MovieDetailsContainer>
        <MovieImageWrapper>
          <MovieImage
            src={
              profile_path ? `${tmdbPosterPath + profile_path}` : ImgPlaceholder
            }
            alt={name}
          />
        </MovieImageWrapper>

        <MovieDetails>
          <MovieSubtitle> Biography</MovieSubtitle>
          <MovieParagraph>
            {!biography ? "This person has not mentioned their BIO" : biography}
          </MovieParagraph>
        </MovieDetails>
      </MovieDetailsContainer>
    </MovieOverviewWrapper>
  );
}
