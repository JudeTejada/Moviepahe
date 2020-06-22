import React from "react";
import styled from "styled-components";

import MovieMainInfo from "./MovieMainInfo";
import MovieSubInfo from "./MovieSubInfo";

const ContentWrapper = styled.div`
  padding: 3em;
`;
export default function Movie(props) {
  const { id } = props.match.params;
  return (
    <ContentWrapper>
      <MovieMainInfo id={id} />
      <MovieSubInfo id={id} />
    </ContentWrapper>
  );
}
