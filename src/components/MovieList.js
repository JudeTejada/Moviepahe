import React from "react";
import MovieCard from "./MovieCard";

import { MovieGrid, CategoryTitle } from "../styles/MovieList";

export default function MovieList({ categoryTitle, movies }) {
  return (
    <div>
      <CategoryTitle>{categoryTitle}</CategoryTitle>
      <MovieGrid>
        {movies.results.slice(0, 8).map((movie, i) => (
          <MovieCard {...movie} key={i} />
        ))}
      </MovieGrid>
    </div>
  );
}
