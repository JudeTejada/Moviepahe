import React, { useState, useEffect } from "react";

import MovieList from "./MovieList";

import { fetchMovieByGenre } from "../api/tmbdb";

export default function Genre(props) {
  const { id, genre } = props.match.params;
  const [moviesGenre, setMoviesGenre] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovieByGenre(id);
      setLoading(false);
      setMoviesGenre(data);
    };
    fetchData();
  }, [id]);
  if (loading) {
    return <h1>Loading</h1>;
  }

  console.log(moviesGenre);
  return (
    <div>
      <h1>{genre}</h1>
      {moviesGenre && <MovieList movies={moviesGenre} />}
    </div>
  );
}
