import React, { useContext } from "react";
import styled from "styled-components";

import { MovieContext } from "../context/Movies.context";
import Searchbar from "./Searchbar";

import MovieList from "./MovieList";
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 5em;
  padding-left: 23%;
`;
export default function Header() {
  const Movies = useContext(MovieContext);

  const { popularMovies, upcomingMovies, topRated } = Movies;

  return (
    <Wrapper>
      <Searchbar />
      <MovieList categoryTitle="Popular Movies" movies={popularMovies} />
      <MovieList categoryTitle="Upcoming Movies" movies={upcomingMovies} />
      <MovieList categoryTitle="TopRated Movies" movies={topRated} />
    </Wrapper>
  );
}
