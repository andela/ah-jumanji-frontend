import React, { Component } from 'react';

import successIcon from "../../../assets/img/success.png";

class RegisterRedirect extends Component {
  render() {
    return (
      <div className="row">
        <div className="bg-circle-1 bg-circle" />
        <div className="bg-circle-2 bg-circle" />
        <div className="bg-circle-3 bg-circle" />
        <div className="register-redirect-modal">
          <img id="success-icon" src={successIcon} alt="success-icon" />
          <p>
            You were successfully registered.
            <br />
            Check your mailbox for a link to activate your account.
          </p>
        </div>
      </div>
    );
  }
}
export default RegisterRedirect;