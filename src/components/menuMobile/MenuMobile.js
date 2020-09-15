import React, { useState } from "react";

import { NavUl } from "../navbar/navbar.styled";
import {
  MobileNavContainer,
  HamburgerButton,
  MobileNavigation,
  MenuOverlay,
  MobileNavList,
  MobileNavTitle,
  CloseButton,
} from "./MenuMobile.styled";

export default function MenuMobile() {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <MobileNavigation>
      <HamburgerButton onClick={() => setToggleOpen(true)}>
        menu
      </HamburgerButton>
      {toggleOpen && (
        <MobileNavContainer>
          <CloseButton onClick={() => setToggleOpen(false)}>CLOSE</CloseButton>
          <MobileNavTitle>Discover</MobileNavTitle>
          <NavUl>
            <MobileNavList
              to={`${process.env.PUBLIC_URL}/discover/popular`}
              activeClassName="active"
            >
              <span role="img" aria-label="navbar icon">
                💎
              </span>{" "}
              Popular
            </MobileNavList>

            <MobileNavList
              to={`${process.env.PUBLIC_URL}/discover/upcoming`}
              activeClassName="active"
            >
              {" "}
              <span role="img" aria-label="navbar icon">
                ✨
              </span>
              Upcoming
            </MobileNavList>

            <MobileNavList
              to={`${process.env.PUBLIC_URL}/discover/top_rated`}
              activeClassName="active"
            >
              {" "}
              <span role="img" aria-label="navbar icon">
                💖
              </span>
              Top Rated
            </MobileNavList>
          </NavUl>
        </MobileNavContainer>
      )}
    </MobileNavigation>
  );
}
