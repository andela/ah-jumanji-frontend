import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/components/Home";
import SocialAuthentication from '../SocialLogin/components/SocialAuth';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={SocialAuthentication} />
  </Switch>
);

export default Main;
