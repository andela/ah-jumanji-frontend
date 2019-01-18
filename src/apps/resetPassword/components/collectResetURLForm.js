import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ToastContainer, toast} from 'react-toastify';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import RequiredInput from "../../common/components/textInput";
import Header from "../../common/components/HeaderComponent";
import {comparePasswords, formSubmit, RequestResetPassword} from "../actions/passwordResetActions";

class CodeCollectionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recovery: {
        recovery_password: "",
        repeat_password: "",
        matching_passwords: ""
      }
    };
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
    this.onSubmitCode = this.onSubmitCode.bind(this);
    this.handleNonMatchingPasswords = this.handleNonMatchingPasswords.bind(this);
    this.onPasswordComparison = this.onPasswordComparison.bind(this);
  }


  async componentDidUpdate(prevProps) {
    const {recovery} = this.props;
    const {history} = this.props;
    const delay = ms => new Promise(res => setTimeout(res, ms));

    if (recovery.isFetching === false && prevProps.recovery.isFetching === true) {
      switch (recovery.last_call) {
        case "failed":
          recovery.error_message.forEach((error) => {
            toast.error(
              error,
              {autoClose: 5000}
            );
          });
          break;
        case "passed":
          toast.success(
            recovery.success_message,
            {autoClose: 5000}
          );
          await delay(2000);
          history.push('/');
      }
    }
  }

  onPasswordChange(evt) {
    const {recovery} = this.state;
    recovery.recovery_password = evt.target.value;
    this.setState(
      {recovery: recovery}
    );
  }

  onRepeatPasswordChange(event) {
    const {recovery} = this.state;
    this.setState(
      {recovery: Object.assign({}, recovery, {repeat_password: event.target.value})}
    );
  }

  onPasswordComparison(bool) {
    const {recovery} = this.state;
    recovery.matching_passwords = bool;

    this.setState(
      {recovery: recovery}
    );
  }


  onSubmitCode(event) {
    const props = this.props;
    const state = this.state;

    event.preventDefault();
    this.handleNonMatchingPasswords();


    if (state.recovery.matching_passwords) {
      props.submitForm();
      props.updatePassword(props.reset_code, state.recovery.recovery_password);
    }
  }

  handleNonMatchingPasswords() {
    const {recovery} = this.state;
    const props = this.props;

    if (recovery.repeat_password !== recovery.recovery_password) {
      this.onPasswordComparison(false);
      props.comparePassword(recovery.matching_passwords);

      toast.warn(
        'The passwords entered do not match!',
        {autoClose: 2000}
      );
    } else {
      this.onPasswordComparison(true);
      props.comparePassword(recovery.matching_passwords);

    }
  }

  render() {
    const {recovery} = this.state;
    return (
      <div className="panel panel-default" id="login-form">
        <ToastContainer />
        <Header label="Enter the new password" />
        <div className="panel-body">
          <form>
            <RequiredInput
              type="password" name="password1" label="Password" onChange={this.onPasswordChange}
              value={recovery.recovery_password} placeholder="password" />
            <RequiredInput
              type="password" name="password2" label="Repeat password" onChange={this.onRepeatPasswordChange}
              value={recovery.repeat_password} placeholder="repeat password" />
            <button type="submit" className="btn btn-success btn-block" onClick={this.onSubmitCode}>Confirm</button>
            <hr />
            {"Don't have an account?"}
            <a href="register">Register.</a>
          </form>
        </div>
      </div>
    );
  }
}

CodeCollectionForm.propTypes = {
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
    comparePassword: bool => dispatch(comparePasswords(bool)),
    submitForm: () => dispatch(formSubmit()),
    updatePassword: (token, password) => dispatch(RequestResetPassword(token, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CodeCollectionForm));

// 208
// maurice
// 8351
