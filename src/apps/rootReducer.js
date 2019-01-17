import {combineReducers} from 'redux';

// import all reducers from the individual app modules
import socialAuth from './SocialLogin/reducers/socialReducer';
import Login from './Login/reducers/loginReducer';
import resetAccountPassword from './resetPassword/reducers/resetPasswordReducer';

const rootReducer = combineReducers({
  socialAuth,
  Login,
  resetAccountPassword
  //Add your reducers here
});

export default rootReducer;
