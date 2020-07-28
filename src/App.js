import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyle } from "./util/global.styles";

import Header from "./components/header/Header";

import MainPage from "./pages/mainPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
