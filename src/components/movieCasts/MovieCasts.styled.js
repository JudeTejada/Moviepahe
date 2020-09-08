import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10em;
`;
export const CastsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    grid-template-columns: 1fr;
  }
`;
