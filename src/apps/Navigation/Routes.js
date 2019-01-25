import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterContainer from "../Register/components/registerContainer";
import RegisterRedirect from "../Register/components/registerRedirect";
import RegisterRedirectActivated from "../Register/components/registerRedirectActivated";
import SocialAuthentication from '../SocialLogin/components/SocialAuth';
import ForgotPassword from "../resetPassword/components/PasswordResetComponent";
import IndexPage from "../Index/components/IndexPage";
import Rating from "../Rating/components/Rating";
import ResetCodePage from "../resetPassword/components/PasswordResetCodeComponent";
import NotificationHistory from "../Notifiications/components/NotificationHistoryComponent";


const Main = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/register" component={RegisterContainer} />
    <Route exact path="/login" component={SocialAuthentication} />
    <Route exact path="/register-redirect" component={RegisterRedirect} />
    <Route exact path="/activate-account/:uid/:token" component={RegisterRedirectActivated} />
    <Route exact path="/reset_password" component={ForgotPassword} />
    <Route exact path="/reset_code/:reset_code" component={ResetCodePage} />
    <Route exact path="/rating" component={Rating} />
    <Route exact path="/register" component={RegisterContainer} />
    <Route exact path="/login" component={SocialAuthentication} />
    <Route exact path="/register-redirect" component={RegisterRedirect} />
    <Route exact path="/activate-account/:uid/:token" component={RegisterRedirectActivated} />
    <Route exact path="/reset_password" component={ForgotPassword} />
    <Route exact path="/reset_code/:reset_code" component={ResetCodePage} />
    <Route exact path="/a/notifications" component={NotificationHistory} />
  </Switch>
);

export default Main;
