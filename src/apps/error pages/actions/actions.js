import * as types from './actionTypes';

export default function registerNewError(message, status) {
  return {
    type: types.NEW_ERROR_RAISED,
    hasError:true,
    message,
    status
  };
}
