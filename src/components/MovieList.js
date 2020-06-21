import React from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";

const MovieGrid = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-row-gap: 4rem;
  /* display: flex;
  overflow: auto;
  width: 100%;
  flex-wrap: nowrap; */
`;
const CategoryTitle = styled.h1`
  margin: 2em 0;
  font-size: 3.2rem;
  font-weight: 900;
`;
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
