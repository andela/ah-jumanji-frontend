import {
  combineReducers
} from 'redux';

// import all reducers from the individual app modules
import socialAuth from './SocialLogin/reducers/socialReducer';
import Login from './Login/reducers/loginReducer';

import REGISTER from "./Register/reducers/registerReducer";

const rootReducer = combineReducers({
  socialAuth,
  Login,
  REGISTER,
  //Add your reducers here
});

export default rootReducer;
