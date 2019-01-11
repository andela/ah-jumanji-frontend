import React from 'react';
import * as emailValidator from 'email-validator';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import {resetPassword, RequestPasswordReset, validateEmail, formSubmit} from "../actions/passwordResetActions";
import RequiredInput from "../../common/components/textInput";
import Header from "../../common/components/HeaderComponent";


class EmailReset extends React.Component {

  //define static functions
  static async handleDelay() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(4000);
  }

  static handleInvalidEmail() {
    let message = "The email provided is invalid";
    toast.warn(message, {autoClose: 2000});
  }

  static handleRequestSuccessful(message) {
    toast.success(message, {autoClose: 2000});
  }

  static handleRequestFailed(message) {
    toast.error(message, {autoClose: 2000});
  }

  // class constructor
  constructor(props) {
    super(props);

    this.state = {
      "recovery": {
        email: '',
        valid_email: null
      }
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
  }

  componentDidUpdate(prevProps) {


    const {recovery} = this.props;
    const {history} = this.props;

    if (recovery.isFetching === false && prevProps.recovery.isFetching === true) {
      switch (recovery.last_call) {
        case "failed":
          EmailReset.handleRequestFailed(recovery.error_message);
          break;
        case "passed":
          EmailReset.handleRequestSuccessful(recovery.success_message);
          EmailReset.handleDelay().then(() => {
            history.push('/');
          });
      }
    }
  }

  onEmailChange(evt) {
    // const state = this.state;
    const {recovery} = this.state;
    recovery.email = evt.target.value;
    this.setState(
      {recovery: recovery}
    );
  }

  onSubmitEmail(event) {
    // prevent page reload on submit
    event.preventDefault();
    const state = this.state;
    const props = this.props;

    // validate the email and update the store
    // console.log('at handlee email');
    this.handleEmailValidation();
    props.verifyEmail(state.recovery.valid_email);

    // update the state in the store
    props.recoverPassword(state.recovery.email);


    if (state.recovery.valid_email) {
      //update state to fetching
      props.submitForm();

      props.requestPasswordReset(state.recovery.email);

    } else {
      EmailReset.handleInvalidEmail();
    }
  }

  handleEmailValidation() {
    const {recovery} = this.state;
    recovery.valid_email = emailValidator.validate(recovery.email);
    this.setState(
      {recovery: recovery}
    );
  }


  render() {
    const {recovery} = this.state;
    return (
      <div className="panel panel-default" id="login-form">
        <ToastContainer />
        <Header label="Forgot Password" />
        <div className="panel-body" style={{padding: " 5px 20px 20px 20px"}}>
          <form>
            <RequiredInput
              type="email"
              name="email"
              label="Email address"
              onChange={this.onEmailChange}
              value={recovery.email}
              placeholder="email"
            />
            <button type="submit" className="btn btn-success btn-block" onClick={this.onSubmitEmail}>Submit</button>
            <hr />
            {"Don't have an account?"}
            <a href="/register">Register.</a>
          </form>
        </div>
      </div>
    );
  }
}

EmailReset.propTypes = {
  recovery: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    recovery: state.resetAccountPassword,
    ownProps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    recoverPassword: email => dispatch(resetPassword(email)),
    requestPasswordReset: email => dispatch(RequestPasswordReset(email)),
    verifyEmail: isValid => dispatch(validateEmail(isValid)),
    submitForm: () => dispatch(formSubmit())
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmailReset));
