import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "../Login/components/LoginContainer";
import ForgotPassword from "../resetPassword/components/PasswordResetComponent";
import IndexPage from "../Index/components/IndexPage";
import ResetCodePage from "../resetPassword/components/PasswordResetCodeComponent";

const Main = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/reset_password" component={ForgotPassword} />
    <Route exact path="/reset_code/:reset_code" component={ResetCodePage} />
  </Switch>
);

export default Main;
