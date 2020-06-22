import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import Person from "./components/Person";
import { MoviesProvider } from "./context/Movies.context";

import ScrollToTop from "./util/scrollTopTop";
//global style
import { GlobalStyle, MainWrapper, ContentWrapper } from "./styles/global";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainWrapper>
        <Navbar />
        <ContentWrapper>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <MoviesProvider>
                  <Header />
                </MoviesProvider>
              )}
            />
            <Route
              exact
              path="/movies/:id"
              render={(routeProps) => {
                return (
                  <>
                    <ScrollToTop>
                      <Movie {...routeProps} />
                    </ScrollToTop>
                  </>
                );
              }}
            />

            <Route
              exact
              path="/person/:id"
              render={(routeProps) => {
                return (
                  <>
                    <ScrollToTop>
                      <Person {...routeProps} />
                    </ScrollToTop>
                  </>
                );
              }}
            />
          </Switch>
        </ContentWrapper>
      </MainWrapper>
    </React.Fragment>
  );
}

export default App;
