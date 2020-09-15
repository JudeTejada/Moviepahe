import styled from "styled-components";
import { NavList, NavTitle } from "../navbar/navbar.styled";

export const HamburgerButton = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: block;
  }
`;

export const MobileNavContainer = styled.nav`
  display: none;
  position: fixed;
  padding: 0;
  right: 10px;
  left: unset !important;
  max-height: -webkit-calc(100% - 100px);
  min-width: 300px;
  overflow-y: scroll;
  background: #fff;
  color: #000;
  z-index: 100;
  top: 0;
  border-radius: 2em;
  padding: 2em;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: block;
  }
`;

export const MobileNavigation = styled.div`
  padding: 1.2em;
`;

export const MobileNavList = styled(NavList)`
  color: #000;
`;

export const MobileNavTitle = styled(NavTitle)`
  color: #000;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1.2em;
`;
