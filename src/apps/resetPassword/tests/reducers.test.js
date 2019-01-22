import resetReducer from '../reducers/resetPasswordReducer';
import * as types from '../actions/actionTypes';


describe('reset password reducer', () => {

  it('should return the initial state', () => {
    expect(
      resetReducer(undefined, {})).toEqual({});
  });


  it('should handle RESET_PASSWORD', () => {
    const action = {
      type: types.RESET_PASSWORD,
      email: "random@email.com"
    };

    // test if it returns the correct state
    expect(resetReducer({}, action)).toMatchSnapshot();

  });

  it('should handle FORM_SUBMIT', () => {
    const action = {
      type: types.FORM_SUBMIT,
      "isFetching": true
    };

    // test if it returns the correct state
    expect(resetReducer({}, action)).toMatchSnapshot();

  });

  it('should handle SUBMIT_SUCCESSFUL', () => {
    const action = {
      type: types.SUBMIT_SUCCESSFUL,
      success_message: true,
      last_call: "passed"
    };

    // test if it returns the correct state
    expect(resetReducer({}, action)).toMatchSnapshot();

  });

  it('should handle SUBMIT_FAILED', () => {
    const action = {
      type: types.SUBMIT_FAILED,
      success_message: true,
      last_call: "failed"
    };

    // test if it returns the correct state
    expect(resetReducer({}, action)).toMatchSnapshot();

  });

  it('should handle VALIDATE_EMAIL', () => {
    const action = {
      type: types.VALIDATE_EMAIL,
      valid_email: undefined
    };

    // test if it returns the correct state
    expect(resetReducer({}, action)).toEqual({valid_email: undefined});

  });

  it('should handle SUBMIT_RESET_LINK', () => {
    const action = {
      type: types.SUBMIT_RESET_LINK,
      reset_link: undefined
    };

    // test if it returns the correct state
    expect(resetReducer({}, action)).toEqual({reset_link: undefined});

  });

  it('should handle SUBMIT_RESET_PASSWORD', () => {
    const action = {
      type: types.SUBMIT_RESET_PASSWORD,
      reset_password: undefined
    };

    // test if it returns the correct state
    expect(resetReducer({}, action)).toEqual({reset_password: undefined});

  });

  it('should handle SUBMIT_RESET_PASSWORD', () => {
    const action = {
      type: types.NON_MATCHING_PASSWORD,
      state: true
    };

    // test if it returns the correct state
    expect(resetReducer({}, action)).toEqual({matching_passwords: true});

  });
});
