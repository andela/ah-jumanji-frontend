import {combineReducers} from "redux";
import resetPassword from "./apps/resetPassword/reducers/resetPasswordReducer";
import socialAuth from './apps/SocialLogin/reducers/socialReducer';
import Login from './apps/Login/reducers/loginReducer';

const Reducers = combineReducers({
  resetPassword,
  socialAuth,
  Login
});
export default Reducers();
