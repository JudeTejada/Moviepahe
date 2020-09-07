import React from "react";

import {
  PersonListContainer,
  PersonImage,
  PersonName,
  PersonCharacter,
  PersonImageContainer,
  PersonListFlex,
} from "./personCast.styled";

import imgPlaceholder from "../../assets/placeholder.jpg";

export default function PersonCast({ name, character, profile_path, id }) {
  const tmdbPosterPath = "https://image.tmdb.org/t/p/w185_and_h278_face/";

  return (
    <PersonListContainer>
      <PersonListFlex to={`/person/${id}`}>
        <PersonImageContainer>
          <PersonImage
            src={
              profile_path ? `${tmdbPosterPath + profile_path}` : imgPlaceholder
            }
            alt="name"
          />
        </PersonImageContainer>

        <div>
          <PersonName>{name}</PersonName>
          <PersonCharacter>{character}</PersonCharacter>
        </div>
      </PersonListFlex>
    </PersonListContainer>
  );
}
