import {
  combineReducers
} from 'redux';

// import all reducers from the individual app modules
import socialAuth from './SocialLogin/reducers/socialReducer';

const rootReducer = combineReducers({
  socialAuth,
  //Add your reducers here

});

export default rootReducer;
