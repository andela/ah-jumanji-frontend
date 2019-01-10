import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexPage from "../Index/components/IndexPage";
import ForgotPassword from "../ForgotPassword/components/ForgotPassword";
import Verified from "../Verified/components/Verified";
import About from "../About/components/About";
import Contact from "../Contact/components/Contact";



const Main = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/forgotpassword" component={ForgotPassword} />
    <Route exact path="/verified" component={Verified} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
