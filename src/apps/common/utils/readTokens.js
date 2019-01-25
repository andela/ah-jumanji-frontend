import {read_cookie} from 'sfcookies';
import {toast} from 'react-toastify';

export default function getUserCookie() {
  let token = read_cookie('token');
  if (token.length === 0) {
    toast(
      "Welcome to our platform. Please login", {autoClose: 3000}
    );
  }
  return token;
}
