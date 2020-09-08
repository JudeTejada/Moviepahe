import styled from "styled-components";

export const AppContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 0.2fr 1fr;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    grid-template-columns: 1fr;
    padding: 4em;
  }
`;
