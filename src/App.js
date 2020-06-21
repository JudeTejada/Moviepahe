import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
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
              render={(routeProps) => <Movie {...routeProps} />}
            />
          </Switch>
        </ContentWrapper>
      </MainWrapper>
    </React.Fragment>
  );
}

export default App;
