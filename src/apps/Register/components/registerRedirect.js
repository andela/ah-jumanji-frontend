import React, { Component } from 'react';

import accountOffIcon from "../../../assets/img/account-off.png";

class RegisterRedirect extends Component {
  render() {
    return (
      <div className="row">
        <div className="bg-circle-1 bg-circle" />
        <div className="bg-circle-2 bg-circle" />
        <div className="bg-circle-3 bg-circle" />
        <div className="register-redirect-modal">
          <img id="success-icon" src={accountOffIcon} alt="success-icon" />
          <p>
            Almost there!
            <br />
            Go to your mailbox and click the link we sent to you to activate your Account.
          </p>
        </div>
      </div>
    );
  }
}
export default RegisterRedirect;
