import styled from "styled-components";

export const GenreCard = styled.div`
  background: #202020;
  display: grid;
  place-items: center;
  padding: 5em;

  transition: all 0.3s;

  &:hover {
    background: var(--tertiary-color-light);
    cursor: pointer;
  }
`;

export const GenreTitle = styled.h2`
  font-size: var(--heading-5-size);
  font-weight: 500;
`;

export const GenreUL = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(286.75px, 1fr));
  grid-gap: 1.6em;
`;
