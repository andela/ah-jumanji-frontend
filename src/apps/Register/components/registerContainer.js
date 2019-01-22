/* eslint-disable react/no-unescaped-entities */
import React, {Component} from 'react';
import RegistrationForm from './registerForm';
import WelcomeSection from '../../common/components/WelcomeSection';

class RegisterContainer extends Component {
  render() {
    return (
      <div className="row login-container">
        <WelcomeSection />
        <RegistrationForm />
      </div>
    );
  }
}

export default RegisterContainer;
