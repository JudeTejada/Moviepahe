import React, { useState } from "react";

import { NavUl, NavList, NavTitle } from "../navbar/navbar.styled";
import { MobileNavContainer, HamburgerButton } from "./MenuMobile.styled";

export default function MenuMobile() {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <MenuMobile>
      <HamburgerButton onClick={() => setToggleOpen(!toggleOpen)}>
        menu
      </HamburgerButton>

      <MobileNavContainer>
        <NavTitle>Discover</NavTitle>
        <NavUl>
          <NavList
            to={`${process.env.PUBLIC_URL}/discover/popular`}
            activeClassName="active"
          >
            <span role="img" aria-label="navbar icon">
              💎
            </span>{" "}
            Popular
          </NavList>

          <NavList
            to={`${process.env.PUBLIC_URL}/discover/upcoming`}
            activeClassName="active"
          >
            {" "}
            <span role="img" aria-label="navbar icon">
              ✨
            </span>
            Upcoming
          </NavList>

          <NavList
            to={`${process.env.PUBLIC_URL}/discover/top_rated`}
            activeClassName="active"
          >
            {" "}
            <span role="img" aria-label="navbar icon">
              💖
            </span>
            Top Rated
          </NavList>
        </NavUl>
      </MobileNavContainer>
    </MenuMobile>
  );
}
