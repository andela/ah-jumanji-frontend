/* eslint-disable react/no-unescaped-entities */
import React, {Component} from 'react';
import RegistrationForm from './registerForm';
import WelcomeSection from '../../common/components/WelcomeSection';
import Navigation from "../../Navigation/Navbar";

class RegisterContainer extends Component {
  render() {
    return (
      <div className="row login-container">
        <Navigation />
        <WelcomeSection />
        <RegistrationForm />
      </div>
    );
  }
}

export default RegisterContainer;