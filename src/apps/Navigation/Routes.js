import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/components/Home";
import Login from "../Login/components/Login";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Main;
