import {combineReducers} from "redux";
import resetPassword from "./apps/resetPassword/reducers/resetPasswordReducer";
import socialAuth from './apps/SocialLogin/reducers/socialReducer';
import Login from './apps/Login/reducers/loginReducer';
import Notifications from './apps/Notifiications/reducers/noticationsReducers';

const Reducers = combineReducers({
  resetPassword,
  socialAuth,
  Login,
  Notifications
});
export default Reducers();
