import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
  padding: 2em;
  padding-left: 7em;
`;

export const MovieDetailList = styled.div`
  margin-bottom: 5.5em;
`;

export const MovieDetailTitle = styled.h4`
  font-size: var(--heading-5-size);
  font-weight: 400;
  margin-bottom: 0.6em;
`;

export const MovieDetailSubtitle = styled.span`
  font-size: var(--body-text);
  color: var(--border-color);
`;

export const MovieSubTitleList = styled(MovieDetailSubtitle)`
  padding: 1.2rem;
  margin-right: 0.75rem;
  margin-bottom: 1.2rem;
  display: inline-block;
  border: 1px solid var(--border-color);
  border-radius: 1.5rem;
`;
