import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Landing from "./Landing";
import Logout from './components/Logout'

function Main() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/login">
          <App />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </>
  );
}

export default Main;
