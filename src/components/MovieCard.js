import React from "react";

export default function MovieCard({ poster_path, original_title, id }) {
  return (
    <div>
      <h2>{original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
    </div>
  );
}
