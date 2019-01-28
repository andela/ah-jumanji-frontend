// Module sets up user registration
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {ToastContainer, toast} from 'react-toastify';

import * as registerActions from '../actions/registerActions';
import {FormInput} from "../../common/components/FormInput";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      username: "",
      email: "",
      password: "",
      repeatPassword: ""
    };
    this.collectUserInput = this.collectUserInput.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.validateUserInput = this.validateUserInput.bind(this);
  }

  collectUserInput = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  registerUser = e => {
    e.preventDefault();
    const {username} = this.state;
    const {email} = this.state;
    const {password} = this.state;
    const {repeatPassword} = this.state;

    // Make object and use to validate user input
    const userInput = {
      "username": username,
      "email": email,
      "password": password,
      "repeatPassword": repeatPassword
    };

    for (let key in userInput) {
      let value = userInput[key];
      this.validateUserInput(key, value);
      // Set up an event listener to highlight errors
      document.querySelector(`input[name=${key}]`).addEventListener('focus', (e) => {
        e.target.classList.remove('highlight-error-input');
        e.target.parentElement.querySelector("p").classList.add("hidden");
        toast.dismiss();
      });
    }

    // Validate passwords
    if (password !== repeatPassword) {
      // Highlight these inputs
      document.querySelectorAll("input[type=password]").forEach((input) => {
        input.parentElement.querySelector("p").innerHTML = "Passwords do not match!";
        input.parentElement.querySelector("p").classList.remove("hidden");
        input.parentElement.querySelector("p").classList.add("subscript-error");
        input.classList.add('highlight-error-input');
      });
    } else if (username && email && password) {
      toast("Registering you ...", {autoClose: 10000});
      const userData = {
        user: {
          username,
          email,
          password,
          repeatPassword
        },
      };
      const {actions} = this.props;
      actions.RegisterUser(userData);
    }
  };

  validateUserInput(inputName, inputValue) {
    if (!inputValue) {
      let warningSubscript = document.querySelector(
        `input[name=${inputName}]`).parentElement.querySelector("p");

      // Display an error beneath appropriate input
      warningSubscript.classList.remove("hidden");
      warningSubscript.innerHTML = "This field may not be blank";
      // Highlight input that has no data
      document.querySelector(`input[name=${inputName}]`).classList.add('highlight-error-input');
    }
  }

  render() {
    return (
      <div className="col-md-6">
        <ToastContainer />
        <div className="panel panel-default" id="login-form">
          <div className="panel-heading">
            <h3>Create Account</h3>
            <hr />
          </div>
          <div className="panel-body">
            {/* Register Form */}
            <form>
              <FormInput
                         inputType="username" inputName="username" placeholder="Enter username" label="Username"
                         onChange={this.collectUserInput} />
              <FormInput
                         inputType="email" inputName="email" placeholder="Enter email" label="Email"
                         onChange={this.collectUserInput} />
              <FormInput
                         inputType="password" inputName="password" placeholder="Enter password" label="Password"
                         onChange={this.collectUserInput} />
              <FormInput
                         inputType="password" inputName="repeatPassword" placeholder="Retype the password"
                         label="repeatPassword" onChange={this.collectUserInput} />
              <button type="submit" className="btn btn-success btn-block" onClick={this.registerUser}>Submit</button>
              <hr />
              Already have an account?
              <NavLink to="/">Login</NavLink>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.Register
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
