import React from "react";

import MovieList from "../movieList/movieList";

import { HeadingTwo } from "../../util/global.styles";
import { SectionContainer } from "../../util/global.styles";

export default function SimilarMovies({ movies }) {
  return (
    <SectionContainer>
      <HeadingTwo>Similar Movies</HeadingTwo>
      <MovieList movies={movies.results.slice(0, 6)} />
    </SectionContainer>
  );
}
