import React from "react";

import {
  CardContainer,
  CardTitle,
  CardDate,
  CardImage,
  CardDetails,
} from "./movieCard.styled";

export default function MovieCard({ title, release_date, id, backdrop_path }) {
  return (
    <CardContainer>
      <CardImage
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w342${backdrop_path})`,
        }}
      />

      <CardDetails>
        <CardTitle>{title}</CardTitle>
        <CardDate>{release_date}</CardDate>
      </CardDetails>
    </CardContainer>
  );
}
