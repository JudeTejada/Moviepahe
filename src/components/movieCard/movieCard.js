import React from "react";

export default function MovieCard({ title, release_date, id, backdrop_path }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w342/${backdrop_path}`} />
      <h2>{title}</h2>
      <h5>{release_date}</h5>
    </div>
  );
}
