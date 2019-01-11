import {
  combineReducers
} from 'redux';

// import all reducers from the individual app modules
import resetAccountPassword from './resetPassword/reducers/resetPasswordReducer';

const rootReducer = combineReducers({
  resetAccountPassword
  //Add your reducers here

});

export default rootReducer;
