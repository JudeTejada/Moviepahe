import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyle } from "../util/global.styles";

import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";

import MainPage from "../pages/mainPage";
import SearchPage from "../pages/searchPage";
import MoviePage from "../pages/moviePage";
import PersonPage from "../pages/personPage";
import GenrePage from "../pages/genrePage";
import DiscoverPage from "../pages/discoverPage";
import { AppContainer } from "./App.styled";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <AppContainer>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search/:movie" component={SearchPage} />
          <Route exact path="/movie/:id" component={MoviePage} />
          <Route exact path="/person/:personId" component={PersonPage} />
          <Route
            exact
            path="/discover/:discoverType/"
            component={DiscoverPage}
          />
          <Route
            exact
            path="/genre/:movieGenre/:genreId"
            component={GenrePage}
          />
        </Switch>
      </AppContainer>
      <Footer />
    </div>
  );
}

export default App;
