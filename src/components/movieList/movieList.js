import React from "react";

import MovieCard from "../movieCard/movieCard";

import { ListContainer } from "./movieList.styled";

export default function MovieList({ movies }) {
  return (
    <div>
      <ListContainer>
        {movies.map((movie, i) => (
          <MovieCard {...movie} key={i} />
        ))}
      </ListContainer>
    </div>
  );
}
