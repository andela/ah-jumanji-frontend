import {
  combineReducers
} from 'redux';

// import all reducers from the individual app modules
import socialAuth from './SocialLogin/reducers/socialReducer';
import Login from './Login/reducers/loginReducer';

const rootReducer = combineReducers({
  socialAuth,
  Login
  //Add your reducers here
});

export default rootReducer;
