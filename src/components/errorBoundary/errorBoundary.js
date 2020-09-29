import React from "react";

import CustomButtonContainer from "../button/button";

import { ErrorContainer } from "./errorBoundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }
  a;
  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  backToHome = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorContainer>
          <h1>Sorry Something went wrong</h1>
          <CustomButtonContainer onClick={this.backToHome}>
            Go back
          </CustomButtonContainer>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
