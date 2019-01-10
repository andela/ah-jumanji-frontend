/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import SocialAuthButtons from './SocialAuthButtons';

import * as loginActions from '../actions/loginActions';


class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    const { email } = this.state;
    const { password } = this.state;
    const loginData = {
        user: {
          email,
          password
        }
    };

    const { actions } = this.props;
    actions.authenticateUser(loginData);
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default" id="login-form">
          <div className="panel-heading">
            <h3>Login</h3>
            <hr />
          </div>
          <div className="panel-body">
            <div className="alert alert-success" id="hiddenelement" role="alert">
              Successfully Logged in.
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" onChange={this.handleChange} className="form-control" name="email" placeholder="Enter email eg. example@gmail.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={this.handleChange} className="form-control" name="password" placeholder="Enter Password" required />
              </div>
              <button type="submit" className="btn btn-success btn-block">Submit</button>
              <SocialAuthButtons />
              <hr />
              <a href="/forgotpassword">Forgot Password?</a>
              <br />
              Don't have an account?
              <a href="/register">Register.</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
   return {
     user: state.Login
   };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
