import styled from "styled-components";

import { Link } from "react-router-dom";

export const PersonListContainer = styled.div`
  transition: all 0.3s;

  &:hover {
    background: var(--tertiary-color-light);
  }
`;

export const PersonListFlex = styled(Link)`
  display: flex;
  align-items: center;
`;

export const PersonImageContainer = styled.div`
  margin-right: 1.5em;
`;

export const PersonImage = styled.img`
  object-fit: cover;
  width: 60px;
  height: 80px;
`;

export const PersonName = styled.h4`
  margin-bottom: 0.4em;
  font-size: var(--heading-6-size);
`;

export const PersonCharacter = styled.p`
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--body-text);
`;
