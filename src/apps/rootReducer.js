import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

// import all reducers from the individual app modules
import Articles from './Articles/reducers/ArticlesReducer';
import socialAuth from './SocialLogin/reducers/socialReducer';
import Login from './Login/reducers/loginReducer';
import resetAccountPassword from './resetPassword/reducers/resetPasswordReducer';
import Register from "./Register/reducers/registerReducer";
import ratingReducer from "./Rating/reducers/ratingReducer";
import Dashboard from "./Dashboard/reducers/dashboardReducer";
import Notifications from "./Notifiications/reducers/noticationsReducers";
import commentListReducer from './Comments/Reducers/CommentListReducer';
import Errors from "./error pages/reducers/errorMessageReducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  socialAuth,
  Login,
  Register,
  resetAccountPassword,
  Articles,
  ratingReducer,
  Dashboard,
  Notifications,
  commentListReducer,
  Errors,
  //Add your reducers here
});


