import styled from "styled-components";

export const AppContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 0.2fr 1fr;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    grid-template-columns: 1fr;
    padding: 4em;
  }

  @media ${(props) => props.theme.mediaQueries.mobileLarge} {
    padding: 0;
  }

  @media ${(props) => props.theme.mediaQueries.mobile} {
    padding: 1.5em;
  }
`;

export const Wrapper = styled.div`
  background: black;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;
