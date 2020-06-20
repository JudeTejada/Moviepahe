import React from "react";
import styled from "styled-components";
const Aside = styled.aside`
  height: 100%;
  overflow: auto;
  /* position: fixed; */
  padding: 3.2rem;
  width: 20%;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 900;
`;

const Ul = styled.ul`
  list-style-type: none;
  font-size: 1.4rem;
`;
const Li = styled.li`
  margin: 8px 0;
  padding: 0.6rem;
  font-weight: 600;
  color: var(--primary-color-2);
`;
const SubHeading = styled.li`
  font-weight: 600;
  color: var(--light-gray);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: left;
  margin: 4em 0 2em 0;
`;

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
