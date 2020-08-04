import React from "react";
import { withRouter } from "react-router";

import { LogoTitle } from "./Logo.styled";

function Logo({ history }) {
  const backToHome = () => {
    history.push("/");
  };

  return <LogoTitle onClick={backToHome}>Movie Hub</LogoTitle>;
}

export default withRouter(Logo);
