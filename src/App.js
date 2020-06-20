import React from "react";

import "./App.css";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html{
    font-size:62.5%; // 10px
  }
  body{
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  }

`;

const MainWrapper = styled.div`
  display: flex;
  background: blue;
`;
const ContentWrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainWrapper>
        <Navbar />
        <ContentWrapper>
          <Header />
        </ContentWrapper>
      </MainWrapper>
    </React.Fragment>
  );
}

export default App;
