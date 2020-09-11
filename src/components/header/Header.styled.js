import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    justify-content: space-between;
    padding: 1em;
    padding-bottom: 0;
  }
`;
