import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyle } from "../util/global.styles";

import Header from "../components/header/Header";
import Footer from "../components/footer/footer";

import MainPage from "../pages/mainPage";
import SearchPage from "../pages/searchPage";
import MoviePage from "../pages/moviePage";
import PersonPage from "../pages/personPage";

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
          <Route exact path="/movie/:id" component={MoviePage} />
          <Route exact path="/person/:personId" component={PersonPage} />
        </Switch>
      </AppContainer>
      <Footer />
    </div>
  );
}

export default App;
