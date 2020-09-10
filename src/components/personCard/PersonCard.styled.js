import styled from "styled-components";

export const PersonCardWrapper = styled.div`
  display: inline-block;
  width: 180px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    padding: 1em;
  }

  @media ${(props) => props.theme.mediaQueries.mobile} {
    padding: 0;
    width: 150px;
  }
`;

export const PersonImageWrapper = styled.div`
  width: 100%;
  height: 270px;
`;
export const PersonImage = styled.img`
  border-radius: 1.6rem;
  width: 100%;
`;

export const PersonName = styled.h4`
  margin-top: 1.2em;
  margin-bottom: 0.4em;
  font-size: var(--heading-6-size);

  @media ${(props) => props.theme.mediaQueries.mobile} {
    font-size: calc(var(--heading-6-size) - 0.3em);
  }
`;

export const PersonCharacter = styled.span`
  font-size: var(--body-text);
`;
