import * as types from '../actions/registerTypes';


export const initialState = {
  user: {}
};

const registerReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return Object.assign({}, state, action.payload);

    case types.REGISTER_FAIL:
      return Object.assign({}, state, action.error);

    default:
      return state;
  }
};

export default registerReducer;
