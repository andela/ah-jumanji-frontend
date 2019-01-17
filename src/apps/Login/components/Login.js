import React, { Component } from 'react';
import SocialAuthButtons from '../../SocialLogin/components/SocialAuth';

class LoginForm extends Component {
  constructor(props){
    super(props);

  }


  render() {

    return (
      <div className="col-md-6">
        <div className="panel panel-default" id="login-form">
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <button type="submit" className="btn btn-success btn-block">Submit</button>
              <SocialAuthButtons />
              <a href="/forgotpassword">Forgot Password?</a>
              <br />
              Don&apos;t have an account?
              <a href="/register">Register.</a>
            </form>
          </div>
        </div>
      </div>
      );
    }
  }

  export default LoginForm;


