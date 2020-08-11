import React from "react";
import { Link } from "react-router-dom";

import {
  PersonCardWrapper,
  PersonImage,
  PersonName,
  PersonCharacter,
} from "./PersonCard.styled";

import ImgPlaceholder from "../../assets/placeholder.jpg";

export default function PersonCard({ name, id, profile_path, character }) {
  const tmdbPosterPath = "https://image.tmdb.org/t/p/w185_and_h278_face/";
  return (
    <PersonCardWrapper>
      <Link to={`/person/${id}`}>
        <div className="cardImage">
          <PersonImage
            src={
              profile_path ? `${tmdbPosterPath + profile_path}` : ImgPlaceholder
            }
            alt={name}
          />
        </div>
        <div className="card_details">
          <PersonName>{name}</PersonName>
          <PersonCharacter>{character}</PersonCharacter>
        </div>
      </Link>
    </PersonCardWrapper>
  );
}
