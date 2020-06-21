import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import { MoviesProvider } from "./context/Movies.context";
//global style
import { GlobalStyle, MainWrapper, ContentWrapper } from "./styles/global";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainWrapper>
        <Navbar />
        <ContentWrapper>
          <MoviesProvider>
            <Header />
          </MoviesProvider>
        </ContentWrapper>
      </MainWrapper>
    </React.Fragment>
  );
}

export default App;
