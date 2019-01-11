import {combineReducers} from "redux";
import resetPassword from "./apps/resetPassword/reducers/resetPasswordReducer";

const Reducers = combineReducers({
  resetPassword
});
export default Reducers();
