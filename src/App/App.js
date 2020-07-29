import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyle } from "../util/global.styles";

import Header from "../components/header/Header";

import MainPage from "../pages/mainPage";
import SearchPage from "../pages/searchPage";
import { AppContainer } from "./App.styled";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search/:movie" component={SearchPage} />
        </Switch>
      </AppContainer>
    </div>
  );
}

export default App;
