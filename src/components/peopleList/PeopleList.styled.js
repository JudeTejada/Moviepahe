import styled from "styled-components";

export const PeopleWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  margin-left: 0;

  @media ${(props) => props.theme.mediaQueries.mobileLarge} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
`;
