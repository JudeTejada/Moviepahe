import React from "react";

import { Aside, Logo, Ul, Li, SubHeading } from "../styles/Navbar";

export default function Navbar() {
  return (
    <Aside>
      <Logo>Movie Hub</Logo>
      <Ul>
        <SubHeading>Discover</SubHeading>
        <Li>Search</Li>
        <Li>Browse</Li>
        <SubHeading>Genres</SubHeading>
        <Li>Action</Li>
        <Li>Adventure</Li>
        <Li>Animation</Li>
        <Li>Comedy</Li>
        <Li>Crime</Li>
      </Ul>
    </Aside>
  );
}
