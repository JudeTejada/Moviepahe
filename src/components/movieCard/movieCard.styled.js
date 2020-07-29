import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const CardImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 2rem;
`;

export const CardDetails = styled.div`
  padding: 2.5em;
  width: 100%;

  background: var(--tertiary-color-light);
  position: absolute;
  bottom: 0;

  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

export const CardTitle = styled.h4`
  font-size: var(--heading-4-size);
  font-weight: 500;
  margin-bottom: 0.2em;
`;

export const CardDate = styled.h5`
  color: var(--card-date);
  font-size: var(--heading-5-size);
`;
