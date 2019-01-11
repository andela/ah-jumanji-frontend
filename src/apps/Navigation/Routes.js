import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from "../Index/components/IndexPage";



const Main = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
  </Switch>
);

export default Main;
