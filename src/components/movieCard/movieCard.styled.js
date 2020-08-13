import styled from "styled-components";
import { Link } from "react-router-dom";
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  position: relative;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  & > * {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const CardDetails = styled.div`
  padding: 2.5em;
  width: 100%;
  background: var(--tertiary-color-light);
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

export const LinkContainer = styled(Link)`
  cursor: pointer;
  color: #fff;
`;
