import { combineReducers } from 'redux';

// import all reducers from the individual app modules
import Articles from './Articles/reducers/ArticlesReducer';
import socialAuth from './SocialLogin/reducers/socialReducer';
import Login from './Login/reducers/loginReducer';
import resetAccountPassword from './resetPassword/reducers/resetPasswordReducer';
import Register from "./Register/reducers/registerReducer";
import { profileReducer } from './UserProfile/reducers/profileReducer';
import ratingReducer from "./Rating/reducers/ratingReducer";
import Dashboard from "./Dashboard/reducers/dashboardReducer";
import Notifications from "./Notifiications/reducers/noticationsReducers";

const rootReducer = combineReducers({
  socialAuth,
  Login,
  Register,
  resetAccountPassword,
  profileReducer,
  Articles,
  ratingReducer,
  Dashboard,
  Notifications
  //Add your reducers here
});

export default rootReducer;
