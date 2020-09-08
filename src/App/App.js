import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
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
import MovieCasts from "../pages/MovieCasts";

import Theme from "../util/theme";

import { AppContainer } from "./App.styled";

function App() {
  const [isMobile, setIsMobile] = useState(null);

  const changeMobile = () => {
    window.matchMedia("(max-width: 80em)").matches
      ? setIsMobile(true)
      : setIsMobile(false);
  };

  useEffect(() => {
    changeMobile();
    window.addEventListener("resize", changeMobile);
    return () => window.removeEventListener("resize", changeMobile);
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <Header />

      <AppContainer>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/search/:movie" component={SearchPage} />
          <Route exact path="/movie/:id" component={MoviePage} />
          <Route exact path="/movie/:id/casts" component={MovieCasts} />
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
    </Theme>
  );
}

export default App;
