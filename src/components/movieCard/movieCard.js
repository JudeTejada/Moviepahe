import React from "react";

import {
  CardContainer,
  CardTitle,
  CardDate,
  CardImageContainer,
  CardDetails,
  LinkContainer,
} from "./movieCard.styled";

import imgPlaceholder from "../../assets/placeholder.jpg";

export default function MovieCard({ title, release_date, id, poster_path }) {
  const tmdbPosterPath = "https://image.tmdb.org/t/p/w185_and_h278_face/";

  return (
    <LinkContainer to={`/movie/${id}`}>
      <CardContainer>
        <CardImageContainer>
          <img
            src={
              poster_path ? `${tmdbPosterPath + poster_path}` : imgPlaceholder
            }
          />
        </CardImageContainer>
        <CardDetails>
          <CardTitle>{title}</CardTitle>
          <CardDate>{release_date}</CardDate>
        </CardDetails>
      </CardContainer>
    </LinkContainer>
  );
}
