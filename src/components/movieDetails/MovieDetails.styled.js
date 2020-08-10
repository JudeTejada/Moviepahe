import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
  padding: 2em;
`;

export const MovieDetailList = styled.div`
  margin-top: 5.5em;
`;

export const MovieDetailTitle = styled.h4`
  font-size: var(--heading-5-size);
  font-weight: 400;
  margin-bottom: 0.6em;
`;

export const MovieDetailSubtitle = styled.span`
  font-size: var(--body-text);
  color: #b5b5b5;
`;

export const MovieSubTitleList = styled(MovieDetailSubtitle)`
  padding-right: 1em;
`;
