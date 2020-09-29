import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyle } from "../util/global.styles";

import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Loader from "../components/loader/Loader";
import ErrorBoundary from "../components/errorBoundary/errorBoundary";

import MainPage from "../pages/mainPage";
import SearchPage from "../pages/searchPage";
import MoviePage from "../pages/moviePage";
import PersonPage from "../pages/personPage";
import GenrePage from "../pages/genrePage";
import DiscoverPage from "../pages/discoverPage";
import MovieCasts from "../pages/MovieCasts";
import AllGenrePage from "../pages/allGenrePage";
import NotFoundPage from "../pages/notFoundPage";

import Theme from "../util/theme";

import { initMainApp } from "../redux/init/init.actions";

import { AppContainer, Wrapper } from "./App.styled";

function App({ initMainApp, loading }) {
  useEffect(() => {
    initMainApp();
  });

  return (
    <Theme>
      <GlobalStyle />

      {loading ? (
        <Wrapper>
          <Loader />
        </Wrapper>
      ) : (
        <>
          <Header />

          <AppContainer>
            <Navbar />
            <ErrorBoundary>
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
                <Route exact path="/genres" component={AllGenrePage} />
                <Route exact path="" component={NotFoundPage} />
              </Switch>
            </ErrorBoundary>
          </AppContainer>
        </>
      )}
    </Theme>
  );
}

const mapStateToProps = (state) => ({
  loading: state.init.loading,
});

const mapDispatchToProps = (dispatch) => ({
  initMainApp: () => dispatch(initMainApp()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
