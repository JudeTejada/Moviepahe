import React from "react";

import MovieCard from "../movieCard/movieCard";

import { ListContainer } from "./movieList.styled";

export default function MovieList({ movies }) {
  return (
    <div>
      <h1>MOVIES</h1>
      <ListContainer>
        {movies.results.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </ListContainer>
    </div>
  );
}
