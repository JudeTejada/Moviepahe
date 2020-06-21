import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color-1 :#111;
    --primary-color-2:#191919;
    --light-gray:#555;

  }
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

export const MainWrapper = styled.div`
  position: relative;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  user-select: none;
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 5em;
  padding-left: 23%;
`;
