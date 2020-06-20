import React, { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "../context/Movies.context";
import Searchbar from "./Searchbar";
const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7f7f7;
  width: 100%;
`;
export default function Header() {
  const popularMovies = useContext(MovieContext);

  console.log("FROM HEADER", popularMovies);
  return (
    <Wrapper>
      <Searchbar />
      <h2>Hello</h2>
    </Wrapper>
  );
}
