import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {ToastContainer} from 'react-toastify';


import SocialAuthButtons from '../../SocialLogin/components/SocialAuth';
import * as loginActions from '../actions/loginActions';
import PanelHeading from './PanelHeading';
import {FormInput} from "../../common/components/FormInput";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {email, password} = this.state;
    const loginData = {
      user: {
        email,
        password
      }
    };

    const {actions} = this.props;
    actions.authenticateUser(loginData);
  }


  render() {
    return (
      <div className="col-md-6">
        <ToastContainer />
        <div className="panel panel-default" id="login-form">
          <PanelHeading title="Login" />
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                label="Email Address" inputType="email" onChange={this.handleChange} inputName="email"
                placeholder="Enter Email" />
              <FormInput
                label="Password" inputType="password" onChange={this.handleChange} inputName="password"
                placeholder="Enter Password" />
              <button type="submit" className="btn btn-success btn-block">Submit</button>
              <SocialAuthButtons />
              <a href="/reset_password">Forgot Password?</a>
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

LoginForm.propTypes = {
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
