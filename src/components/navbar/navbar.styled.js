import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavContainer = styled.nav`
  margin-top: 6.5em;
`;

export const NavTitle = styled.h3`
  letter-spacing: 0;
  color: #fff;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-box-direction: normal;
  background-image: none;
  font-size: 24px;
  line-height: 28px;
  display: block;
  margin-bottom: 16px;
  font-weight: 700;

  &:not(:first-child) {
    margin-top: 1.4em;
  }
`;

export const NavUl = styled.ul`
  list-style: none;
  padding-right: 4em;
`;

export const NavList = styled(NavLink)`
  list-style: none;
  color: #fff;
  font-size: 16px;
  line-height: normal;
  font-weight: 400;
  cursor: pointer;
  padding-left: 0.5em;
  margin-bottom: 0.8em;
  display: flex;
  padding: 0.6em;
  transition: all 0.3s;
  border-radius: 2em;

  &.active {
    background: #fff;
    color: var(--tertiary-color-light);
  }
  &:hover {
    opacity: 0.8;
  }

  ${(props) => props.togglehide && "display:none"}
`;

export const NavLi = styled.li`
  margin-bottom: 0.8em;
`;
