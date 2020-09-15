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
        <svg
          class="SVGInline-svg header-menu__icon-svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.8h16M1 9h16M1 16.2h16"
            stroke-width="2"
            stroke="#FFF"
            fill="none"
            stroke-linecap="round"
          ></path>
        </svg>
      </HamburgerButton>
      {toggleOpen && (
        <MobileNavContainer>
          <CloseButton onClick={() => setToggleOpen(false)}></CloseButton>
          <MobileNavTitle>Discover</MobileNavTitle>
          <NavUl>
            <MobileNavList
              to={`${process.env.PUBLIC_URL}/discover/popular`}
              activeClassName="active"
              onClick={() => setToggleOpen(false)}
            >
              <span role="img" aria-label="navbar icon">
                💎
              </span>{" "}
              Popular
            </MobileNavList>

            <MobileNavList
              to={`${process.env.PUBLIC_URL}/discover/upcoming`}
              activeClassName="active"
              onClick={() => setToggleOpen(false)}
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
              onClick={() => setToggleOpen(false)}
            >
              {" "}
              <span role="img" aria-label="navbar icon">
                💖
              </span>
              Top Rated
            </MobileNavList>

            <MobileNavList
              to={`${process.env.PUBLIC_URL}/genres`}
              activeClassName="active"
              onClick={() => setToggleOpen(false)}
            >
              <span role="img" aria-label="navbar icon">
                🎬
              </span>
              Genres
            </MobileNavList>
          </NavUl>
        </MobileNavContainer>
      )}
    </MobileNavigation>
  );
}
