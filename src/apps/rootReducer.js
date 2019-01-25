import {combineReducers} from 'redux';

// import all reducers from the individual app modules
import socialAuth from './SocialLogin/reducers/socialReducer';
import Login from './Login/reducers/loginReducer';
import resetAccountPassword from './resetPassword/reducers/resetPasswordReducer';
import Register from "./Register/reducers/registerReducer";
import ratingReducer from "./Rating/reducers/ratingReducer";
import Notifications from "./Notifiications/reducers/noticationsReducers";

const rootReducer = combineReducers({
  socialAuth,
  Login,
  Register,
  resetAccountPassword,
  ratingReducer,
  Notifications
  //Add your reducers here
});

export default rootReducer;
