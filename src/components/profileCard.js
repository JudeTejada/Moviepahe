import React from "react";
import { Link } from "react-router-dom";
export default function ProfileCard({ name, id, profile_path, character }) {
  return (
    <div>
      <Link to={`/person/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_face/${profile_path}`}
          alt={name}
        />
        <h2>{name}</h2>
        <h3>{character}</h3>
      </Link>
    </div>
  );
}
