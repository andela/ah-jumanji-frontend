import {read_cookie} from 'sfcookies';

export default function getUserCookie() {
  let token = read_cookie('token');
  if (token.length === 0) {
    const ApplicationError = require("../Exceptions/ApplicationError");
    throw new ApplicationError(
      "You are not authorised to view this page.Please Login!!",
      401
    );
  }
  return token;
}
