import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

import CustomButtonContainer from "../components/button/button";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function NotFoundPage({ history }) {
  const backToHome = () => {
    history.push("/");
  };

  return (
    <NotFoundContainer>
      <h1>Oops, Looks like you entered a non existing page</h1>
      <CustomButtonContainer onClick={backToHome}>
        Go back
      </CustomButtonContainer>
    </NotFoundContainer>
  );
}

export default withRouter(NotFoundPage);
