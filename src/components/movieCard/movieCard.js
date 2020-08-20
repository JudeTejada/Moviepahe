import React from "react";

import {
  CardContainer,
  CardTitle,
  CardDate,
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

  const genres = [
    {
      id: 28,
      name: "Action",
    },

    {
      id: 12,
      name: "Adventure",
    },

    {
      id: 16,
      name: "Animation",
    },

    {
      id: 35,
      name: "Comdey",
    },

    {
      id: 80,
      name: "Crime",
    },
  ];
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

          <CardUl>
            <CardLi>
              <CardTerm>Language:</CardTerm>
              <span class="description">{original_language}</span>
            </CardLi>

            <CardLi>
              <CardTerm class="term">Vote Average:</CardTerm>
              <span class="description">{vote_average}</span>
            </CardLi>

            <CardLi>
              <CardTerm class="term">Release Date</CardTerm>
              <span class="description">{release_date}</span>
            </CardLi>
          </CardUl>
        </CardDetails>
      </CardContainer>
    </LinkContainer>
  );
}
