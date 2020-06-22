import React, { useState, useEffect } from "react";
import { fetchSimilarMovies } from "../api/tmbdb";

import MovieList from "./MovieList";
export default function SimilarMovies({ id }) {
  const [similarMovies, setSimilarMovies] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSimilarMovies(id);
      setloading(false);
      setSimilarMovies(data);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    similarMovies && (
      <MovieList categoryTitle="Similar Movies" movies={similarMovies} />
    )
  );
}
