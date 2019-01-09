/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import LoginForm from './LoginForm';

class LoginContainer extends Component {
  render() {
    return (
      <div className="row login-container">
        <div className="col-md-6">
          <div className="bg-circle-1 bg-circle" />
          <div className="bg-circle-2 bg-circle" />
          <div className="bg-circle-3 bg-circle" />
          <div className="welcome">
            <h1 className="text-muted">
            Welcome to Author's Haven!
            </h1>
            <br />
            <h4>
              "The currency of blogging is authenticity and trust"
              <br />
            </h4>
            <h6>
              <i className="text-muted">~ Jason Calacanis</i>
            </h6>
          </div>
        </div>
        <LoginForm />
      </div>
    );
  }
}

export default LoginContainer;
