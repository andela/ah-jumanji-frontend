import {combineReducers} from 'redux';

// import all reducers from the individual app modules
import socialAuth from './SocialLogin/reducers/socialReducer';
import Login from './Login/reducers/loginReducer';
import resetAccountPassword from './resetPassword/reducers/resetPasswordReducer';
import Register from "./Register/reducers/registerReducer";
import Dashboard from "./Dashboard/reducers/dashboardReducer";

const rootReducer = combineReducers({
  socialAuth,
  Login,
  Register,
  resetAccountPassword,
  Dashboard
  //Add your reducers here
});

export default rootReducer;
