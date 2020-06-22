import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileCardWrapper = styled.div`
  text-align: left;
`;
export const ProfileTitle = styled.h2`
  font-weight: 500;
  color: var(--primary-color-1);
  padding: 0.5em 0;
`;
export const ProfileSubtitle = styled.h3`
  color: #555;
  font-weight: 300;
  font-size: 1.6rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
