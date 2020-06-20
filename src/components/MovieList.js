import React from "react";
import MovieCard from "./MovieCard";
export default function MovieList({ categoryTitle, movies }) {
  return (
    <div>
      <h1>{categoryTitle}</h1>
      {movies.results.map((movie, i) => (
        <MovieCard {...movie} key={i} />
      ))}
    </div>
  );
}
