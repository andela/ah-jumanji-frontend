import {push} from 'connected-react-router';
import store from '../../../index';
import {registerNewError} from "../../error pages/actions/actions";

export default class AppError extends Error {
  constructor(message, status) {

    // Calling parent constructor of base Error class.
    super();

    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    // You can use any additional properties you want.
    // I'm going to use preferred HTTP status for this error types.
    // `500` is the default value if not specified.
    this.status = status || 500;

    // now dispatch the error to the store
    store.dispatch(registerNewError(message, status));

    // now redirect to page
    store.dispatch(push('/authenticate'));
    location.reload();

  }
}
