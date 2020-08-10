import React from "react";

import PeopleList from "../peopleList/PeopleList";
import MovieDetails from "../movieDetails/MovieDetails";

import { CastsWrapper, CastsTitle, Container } from "./MovieCasts.styled";
export default function MovieCasts({ casts, movie }) {
  const { cast } = casts;
  return (
    <Container>
      <CastsTitle>Movie Casts</CastsTitle>
      <CastsWrapper>
        <PeopleList people={cast.slice(0, 12)} />

        <MovieDetails movie={movie} />
      </CastsWrapper>
    </Container>
  );
}
