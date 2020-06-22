import React, { createContext, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
export const MovieContext = createContext();
const API_KEY = "7221bdf03803e2fa7eb1f2e0e991bc09";
export function MoviesProvider(props) {
  const moviesData = useCallback(
    useFetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    )
  );

  return (
    moviesData && (
      <MovieContext.Provider value={moviesData}>
        {props.children}
      </MovieContext.Provider>
    )
  );
}
