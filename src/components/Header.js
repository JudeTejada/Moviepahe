import React, { useContext } from "react";
import styled from "styled-components";

import { MovieContext } from "../context/Movies.context";
import Searchbar from "./Searchbar";

import MovieList from "./MovieList";
const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7f7f7;
  width: 100%;
`;
export default function Header() {
  const Movies = useContext(MovieContext);

  const { popularMovies, upcomingMovies, topRated } = Movies;

  return (
    <Wrapper>
      <Searchbar />
      <MovieList categoryTitle="Popular Movies" movies={popularMovies} />
    </Wrapper>
  );
}
