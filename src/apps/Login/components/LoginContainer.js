import React, {Component} from 'react';

import LoginForm from './LoginForm';
import WelcomeSection from '../../common/components/WelcomeSection';
import Navigation from "../../Navigation/Navbar";


class LoginContainer extends Component {
  render() {
    return (
      <div className="row login-container">
        <Navigation />
        <WelcomeSection />
        <LoginForm />
      </div>
    );
  }
}

export default LoginContainer;
