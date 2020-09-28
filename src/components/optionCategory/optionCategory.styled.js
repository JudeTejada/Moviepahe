import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  margin-bottom: 1.4em;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  @media ${(props) => props.theme.mediaQueries.mobile} {
  }
`;

export const FilterWrapper = styled.div`
  &:not(first-child) {
    margin-left: 1.2em;
  }
`;

export const FilterLabel = styled.label`
  display: block;
  font-size: var(--body-text);
  margin-left: 0.4em;
`;

export const FilterSelect = styled.select`
  padding: 0.4em 0.7em;
  background: var(--tertiary-color-light);
  color: #fff;
  border-radius: 0.5rem;
  border: 0;
  font-size: var(--body-text);
`;
