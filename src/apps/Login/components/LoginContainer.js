import React, { Component} from 'react';

import LoginForm from './LoginForm';
import WelcomeSection from '../../Common/components/WelcomeSection';


class LoginContainer extends Component {
  render() {
    return (
      <div className="row login-container">
        <WelcomeSection />
        <LoginForm />
      </div>
    );
  }
}

export default LoginContainer;
