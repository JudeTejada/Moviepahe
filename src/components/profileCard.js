import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileCardWrapper = styled.div`
  text-decoration: none;
  text-align: left;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const ProfileTitle = styled.h2`
  font-weight: 500;
  color: var(--primary-color-1);
  padding: 0.5em 0;
`;
const ProfileSubtitle = styled.h3`
  color: #555;
  font-weight: 300;
  font-size: 1.6rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

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
