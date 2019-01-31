import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterContainer from "../Register/components/registerContainer";
import RegisterRedirect from "../Register/components/registerRedirect";
import RegisterRedirectActivated from "../Register/components/registerRedirectActivated";
import SocialAuthentication from '../SocialLogin/components/SocialAuth';
import ForgotPassword from "../resetPassword/components/PasswordResetComponent";
import IndexPage from "../Index/components/IndexPage";
import ResetCodePage from "../resetPassword/components/PasswordResetCodeComponent";
import Profile from "../UserProfile/components/Profile";
import EditProfile from "../UserProfile/components/EditProfile";
import ArticlePage from "../Articles/components/create/CreateArticle";
import ReadArticle from "../Articles/components/view/ViewArticle";
import EditArticle from "../Articles/components/edit/EditArticle";
import Rating from "../Rating/components/Rating";
import Dashboard from "../Dashboard/components/DashboardContainer";
import NotificationHistory from "../Notifiications/components/NotificationHistoryComponent";
import Bookmarks from "../Bookmarks/components/Bookmarks";
import CommentContainer from '../Comments/Components/CommentsContainer';

const Main = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/register" component={RegisterContainer} />
    <Route exact path="/login" component={SocialAuthentication} />
    <Route exact path="/register-redirect" component={RegisterRedirect} />
    <Route exact path="/activate-account/:uid/:token" component={RegisterRedirectActivated} />
    <Route exact path="/reset_password" component={ForgotPassword} />
    <Route exact path="/reset_code/:reset_code" component={ResetCodePage} />
    <Route exact path="/a/profile" component={Profile} />
    <Route exact path="/a/profile/edit" component={EditProfile} />
    <Route exact path="/a/createarticle" component={ArticlePage} />
    <Route path="/a/view_article/:slug" component={ReadArticle} />
    <Route path="/a/edit_article/:slug" component={EditArticle} />
    <Route exact path="/a/rating" component={Rating} />
    <Route exact path="/a/home" component={Dashboard} />
    <Route exact path="/a/notifications" component={NotificationHistory} />
    <Route exact path="/a/articles/:article_slug/comments" component={CommentContainer} />
    <Route exact path="/a/bookmarks" component={Bookmarks} />
  </Switch>
);

export default Main;
