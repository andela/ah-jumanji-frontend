import React from "react";
import {withRouter} from "react-router-dom";

class LoginButton extends React.Component {

  render() {
    return (
      <a
        type="button"
        className="btn btn-outline-success btn-sm icon-left unread"
        href="/login">
        Login
      </a>
    );
  }
}

export default withRouter(LoginButton);
