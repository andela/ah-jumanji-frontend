import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterContainer from "../Register/components/registerContainer";
import RegisterRedirect from "../Register/components/registerRedirect";
import RegisterRedirectActivated from "../Register/components/registerRedirectActivated";
import ForgotPassword from "../resetPassword/components/PasswordResetComponent";
import IndexPage from "../Index/components/IndexPage";
import ResetCodePage from "../resetPassword/components/PasswordResetCodeComponent";
import ArticlePage from "../Articles/components/create/CreateArticle";
import ReadArticle from "../Articles/components/view/ViewArticle";
import EditArticle from "../Articles/components/edit/EditArticle";
import Rating from "../Rating/components/Rating";
import Dashboard from "../Dashboard/components/DashboardContainer";

const Main = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/register" component={RegisterContainer} />
    <Route exact path="/register-redirect" component={RegisterRedirect} />
    <Route exact path="/activate-account/:uid/:token" component={RegisterRedirectActivated} />
    <Route exact path="/reset_password" component={ForgotPassword} />
    <Route exact path="/reset_code/:reset_code" component={ResetCodePage} />
    <Route exact path="/new_article" component={ArticlePage} />
    <Route path="/view_article/:slug" component={ReadArticle} />
    <Route path="/edit_article/:slug" component={EditArticle} />
    <Route exact path="/rating" component={Rating} />
    <Route exact path="/a/home" component={Dashboard} />
  </Switch>
);

export default Main;
