import * as types from  '../actions/actionTypes';


export default function loginUserReducer(state = {}, action){
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, action.user);

        case types.LOGIN_FAILED:
            return Object.assign({}, state, action.error_message);

        default:
            return state;
    }
}
