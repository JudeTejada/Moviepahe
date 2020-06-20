import React from "react";
import styled from "styled-components";

import Searchbar from "./Searchbar";
const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7f7f7;
  width: 100%;
`;
export default function Header() {
  return (
    <Wrapper>
      <Searchbar />
      <h2>Hello</h2>
    </Wrapper>
  );
}
