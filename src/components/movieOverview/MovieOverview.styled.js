import styled from "styled-components";

export const MovieOverviewWrapper = styled.div`
  margin: 4em 0;
`;

export const MovieTitle = styled.h2`
  font-weight: 300;
  font-size: var(--heading-3-size);
  margin-bottom: 0.4em;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.mediaQueries.mobileLarge} {
    display: block;
  }
`;

export const MovieImageWrapper = styled.div`
  flex-basis: 20%;
  width: 300px;
`;

export const MovieDetails = styled.div`
  padding: 0 4.8rem;
  flex: 1;
  @media ${(props) => props.theme.mediaQueries.mobileLarge} {
    padding: 0;
  }
`;
export const MovieImage = styled.img`
  width: 100%;
  border-radius: 0.3rem;
  object-fit: cover;
  height: 300px;
`;

export const MovieSubtitle = styled.h5`
  font-size: var(--heading-5-size);
  margin-bottom: 1em;
`;

export const MovieParagraph = styled.p`
  opacity: 0.8;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
