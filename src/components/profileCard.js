import React from "react";

import {
  StyledLink,
  ProfileCardWrapper,
  ProfileTitle,
  ProfileSubtitle,
} from "../styles/profileCard";
export default function ProfileCard({ name, id, profile_path, character }) {
  return (
    <StyledLink to={`/person/${id}`}>
      <ProfileCardWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_face/${profile_path}`}
          alt={name}
        />
        <ProfileTitle>{name}</ProfileTitle>
        <ProfileSubtitle>{character}</ProfileSubtitle>
      </ProfileCardWrapper>
    </StyledLink>
  );
}
