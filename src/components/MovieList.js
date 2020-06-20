import React from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
const MovieGrid = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-row-gap: 4rem;
`;
export default function MovieList({ categoryTitle, movies }) {
  return (
    <div>
      <h1>{categoryTitle}</h1>
      <MovieGrid>
        {movies.results.map((movie, i) => (
          <MovieCard {...movie} key={i} />
        ))}
      </MovieGrid>
    </div>
  );
}
