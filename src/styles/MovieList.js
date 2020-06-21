import styled from "styled-components";

export const MovieGrid = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-row-gap: 4rem;
`;
export const CategoryTitle = styled.h1`
  margin: 2em 0;
  font-size: 3.2rem;
  font-weight: 900;
`;
