import {
  combineReducers
} from 'redux';

// import all reducers from the individual app modules
import Login from './Login/reducers/loginReducer';


const rootReducer = combineReducers({
  Login
  //Add your reducers here

});

export default rootReducer;
