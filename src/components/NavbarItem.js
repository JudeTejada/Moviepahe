import React from "react";

import { StyledLink } from "../styles/profileCard";
import { Li } from "../styles/Navbar";

export default function NavbarItem({ id, name }) {
  return (
    <StyledLink to={`/genres/${id}/${name}`}>
      <Li>{name}</Li>
    </StyledLink>
  );
}
