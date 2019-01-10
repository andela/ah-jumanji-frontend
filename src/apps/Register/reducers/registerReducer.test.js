import registerReducer from "./registerReducer";
import * as actions from '../actions/registerActions';

describe('resister reducers', () => {
  const state = {
    user: {}
  };
  it('should return the initial state', () => {
    expect(registerReducer(undefined, {})).toEqual(state);
  });

  it('should handle REGISTER_USER', () => {
    expect(registerReducer(state, {})).toEqual(state);
  });

  it('should handle REGISTER_SUCCESS', () => {
    const registerSuccess = {
      type: actions.RegisterSuccess
    };
    expect(registerReducer({}, registerSuccess)).toEqual({});
  });

  it('should handle REGISTER_FAIL', () => {
    const registerFail = {
      type: actions.RegisterFail
    };
    expect(registerReducer({}, registerFail)).toEqual({});
  });
});
