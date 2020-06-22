import React, { useContext } from "react";

import { MovieContext } from "../context/Movies.context";
import Searchbar from "./Searchbar";

import MovieList from "./MovieList";

export default function Header() {
  const Movies = useContext(MovieContext);

  const { popularMovies, upcomingMovies, topRated } = Movies;

  return (
    <>
      <Searchbar />
      <MovieList categoryTitle="Popular Movies" movies={popularMovies} />
      <MovieList categoryTitle="Upcoming Movies" movies={upcomingMovies} />
      <MovieList categoryTitle="TopRated Movies" movies={topRated} />
    </>
  );
}
