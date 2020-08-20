import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background: #202020;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

export const CardTitle = styled.h4`
  font-size: var(--heading-5-size);
  font-weight: 500;
  margin-bottom: 0.2em;
  position: relative;
  z-index: 500;
`;

export const CardDate = styled.h5`
  color: var(--card-date);
  font-size: var(--heading-5-size);
`;

export const LinkContainer = styled(Link)`
  cursor: pointer;
  color: #fff;
`;

export const CardUl = styled.ul`
  margin-top: 0.7em;
  list-style: none;
  transition: all 0.3s;
  display: none;
  position: absolute;
  z-index: 100;
  bottom: 0;

  left: 0;
  width: 100%;
  padding: 2.4em;
  bottom: -11em;
  background: #202020;
  color: #fff;
`;

export const CardLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-top: 12px;

  &:not(:last-child) {
    padding-bottom: 12px;
    border-bottom: 1px solid var(--tertiary-color-light);
  }
`;

export const CardTerm = styled.span`
  opacity: 0.6;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
  &:hover {
    transform: scale(1.02);
  }

  &:hover ${CardUl} {
    display: block;
  }
`;
