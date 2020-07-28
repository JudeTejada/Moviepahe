import React from "react";

import MovieCard from "../movieCard/movieCard";

export default function MovieList({ movies }) {
  return (
    <div>
      <h1>MOVIES</h1>
      {movies.results.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
}
