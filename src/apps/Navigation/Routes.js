import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from "../Index/components/IndexPage";
import RegisterContainer from "../Register/components/registerContainer";
import RegisterRedirect from "../Register/components/registerRedirect";


import SocialAuthentication from '../SocialLogin/components/SocialAuth';

const Main = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/register" component={RegisterContainer} />
    <Route exact path="/register-redirect" component={RegisterRedirect} />
    <Route exact path="/login" component={SocialAuthentication} />
  </Switch>
);

export default Main;
