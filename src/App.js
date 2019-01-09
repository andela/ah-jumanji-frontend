import {hot} from "react-hot-loader/root";
import React from "react";
import 'bootstrap';

import Socialauth from './apps/social_auth/components/SocialAuth';

const App = () => (
  <div className="jumbotron">
    <h1>Hey there,Welcome to authors Haven</h1>
    <Socialauth />
  </div>
);

export default hot(App);
