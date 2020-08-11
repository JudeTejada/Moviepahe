import React from "react";

import PeopleList from "../peopleList/PeopleList";
import MovieDetails from "../movieDetails/MovieDetails";

import { CastsWrapper, Container } from "./MovieCasts.styled";
import { SectionContainer } from "../../util/global.styles";
import { HeadingTwo } from "../../util/global.styles";

export default function MovieCasts({ casts, movie }) {
  const { cast } = casts;
  return (
    <SectionContainer>
      <HeadingTwo>Movie Casts</HeadingTwo>
      <CastsWrapper>
        <PeopleList people={cast.slice(0, 12)} />

        <MovieDetails movie={movie} />
      </CastsWrapper>
    </SectionContainer>
  );
}
