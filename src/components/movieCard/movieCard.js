import React from "react";

import {
  CardContainer,
  CardTitle,
  CardImageContainer,
  CardDetails,
  LinkContainer,
  CardLi,
  CardUl,
  CardTerm,
} from "./movieCard.styled";

import imgPlaceholder from "../../assets/placeholder.jpg";

export default function MovieCard({
  title,
  release_date,
  id,
  poster_path,
  vote_average,
  genres_ids,
  original_language,
}) {
  const tmdbPosterPath = "https://image.tmdb.org/t/p/w185_and_h278_face/";

  return (
    <LinkContainer to={`/movie/${id}`}>
      <CardContainer>
        <CardImageContainer>
          <img
            src={
              poster_path ? `${tmdbPosterPath + poster_path}` : imgPlaceholder
            }
            alt={title}
          />
        </CardImageContainer>
        <CardDetails>
          <CardTitle>{title}</CardTitle>

          <CardUl>
            <CardLi>
              <CardTerm>Language:</CardTerm>
              <span className="description">{original_language}</span>
            </CardLi>

            <CardLi>
              <CardTerm>Vote Average:</CardTerm>
              <span className="description">{vote_average}</span>
            </CardLi>

            <CardLi>
              <CardTerm>Release Date</CardTerm>
              <span className="description">{release_date}</span>
            </CardLi>
          </CardUl>
        </CardDetails>
      </CardContainer>
    </LinkContainer>
  );
}
