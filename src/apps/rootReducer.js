import {
  combineReducers
} from 'redux';

// import all reducers from the individual app modules
import socialAuthReducer from './social_auth/reducers/socialReducer';
import Login from './Login/reducers/loginReducer';


const rootReducer = combineReducers({
  socialAuthReducer,
  Login,
  //Add your reducers here

});

export default rootReducer;
