import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from "../Index/components/IndexPage";
import SocialAuthentication from '../SocialLogin/components/SocialAuth';

const Main = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/login" component={SocialAuthentication} />
  </Switch>
);

export default Main;
