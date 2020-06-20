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
  background: lightblue;
`;
const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 900;
`;

export default function Navbar() {
  return (
    <Aside>
      <Logo>Movie Hub</Logo>
    </Aside>
  );
}
