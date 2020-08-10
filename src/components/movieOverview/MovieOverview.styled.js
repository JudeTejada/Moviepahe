import styled from "styled-components";

export const MovieOverviewWrapper = styled.div`
  margin: 4em 0;
`;

export const MovieTitle = styled.h2`
  font-weight: 300;
  font-size: var(--heading-3-size);
  margin-bottom:0.4em;

`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  align-items:center;

`;

export const MovieImageWrapper = styled.div`
flex-basis:40%;
`;

export const MovieDetails = styled.div`
  padding: 0 4.8rem;
  flex:1;
;
`;
export const MovieImage = styled.img`
  width: 100%;
  border-radius: 0.3rem;
  object-fit: cover;
`;

export const MovieSubtitle = styled.h5`
  font-size: var(--heading-5-size);
  margin-bottom: 1em;
`;

export const MovieParagraph = styled.p`
    opacity:0.8;
`
