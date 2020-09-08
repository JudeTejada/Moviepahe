import React from "react";
import MovieList from "../movieList/movieList";

import { HeadingTwo } from "../../util/global.styles";
import {
  MovieDetailTitle,
  MovieDetailSubtitle,
  MovieDetailList,
  MovieDetailsWrapper,
} from "../movieDetails/MovieDetails.styled";
import { PersonWrapper } from "./PersonCasting.styled";
export default function PersonCasting({ casting, actor }) {
  const { birthday, place_of_birth, gender, known_for_department } = actor;
  return (
    <div>
      <HeadingTwo>Known For</HeadingTwo>
      <PersonWrapper>
        <MovieList movies={casting.slice(0, 6)} />

        <MovieDetailsWrapper>
          <MovieDetailList>
            <MovieDetailTitle>Birthday</MovieDetailTitle>
            <MovieDetailSubtitle>
              {birthday ? birthday : "N/A"}
            </MovieDetailSubtitle>
          </MovieDetailList>

          <MovieDetailList>
            <MovieDetailTitle>Gender</MovieDetailTitle>
            <MovieDetailSubtitle>{gender ? gender : "N/A"}</MovieDetailSubtitle>
          </MovieDetailList>

          <MovieDetailList>
            <MovieDetailTitle>Known For</MovieDetailTitle>
            <MovieDetailSubtitle>
              {known_for_department ? known_for_department : "N/A"}
            </MovieDetailSubtitle>
          </MovieDetailList>

          <MovieDetailList>
            <MovieDetailTitle>Place of birth</MovieDetailTitle>
            <MovieDetailSubtitle>
              {place_of_birth ? place_of_birth : "N/A"}
            </MovieDetailSubtitle>
          </MovieDetailList>
        </MovieDetailsWrapper>
      </PersonWrapper>
    </div>
  );
}
