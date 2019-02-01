/* eslint react/prop-types: 0 */
import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as errorNotificationActions from "../actions/actions";
import ErrorPage from "./error404Page";


function mapStateToProps(state) {
  return {
    errors: state.Errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(errorNotificationActions, dispatch)
  };
}


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error_message: undefined
    };
  }

  componentDidCatch(error, info) {
    const {errors} = this.props;
    // Display fallback UI
    this.setState({hasError: true});
    if (errors.message !== undefined) {
      this.setState({error_message: errors.message});
    }
    // You can also log the error to an error reporting service
    /*eslint-disable no-console */
    if (process.env.NODE_ENV === 'development') {
      console.log("*************************************************************");
      console.log(error);
      console.log(info);
      console.log("*************************************************************");
    }
    /*eslint-enable no-console */

  }

  render() {
    const {hasError, error_message} = this.state;
    const {children} = this.props;
    let fancy_message = "An error 500 occurs when something blows up with our code.You viewing this does" +
      " not in fact fix it. In fact you you are probably pissed.Take solace in knowing our TOP men are now aware";
    const message = error_message || fancy_message;
    if (hasError) {
      // You can render any custom fallback UI
      // return <h1>Something went wrong.</h1>;
      return <ErrorPage message={message} header="500!" />;
    } else {
      return children;
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
