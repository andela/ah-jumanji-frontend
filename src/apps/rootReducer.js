import {
  combineReducers
} from 'redux';

// import all reducers from the individual app modules
import socialAuthReducer from './social_auth/reducers/socialReducer';

const rootReducer = combineReducers({
  socialAuthReducer,
  //Add your reducers here

});

export default rootReducer;
