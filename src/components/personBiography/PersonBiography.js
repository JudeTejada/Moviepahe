import React from "react";

export default function PersonBiography({ actor }) {
  const tmdbPosterPath = "https://image.tmdb.org/t/p/w300_and_h450_face/";
  const { biography, name, profile_path } = actor;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img src={`${tmdbPosterPath + profile_path}`} alt={name} />
      </div>
      <div>
        <h4>Biography</h4>
        <p>{biography}</p>
      </div>
    </div>
  );
}
