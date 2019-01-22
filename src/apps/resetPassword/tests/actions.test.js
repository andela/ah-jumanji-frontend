import * as types from '../actions/actionTypes';
import * as actions from '../actions/passwordResetActions';


describe('Reset password actions', () => {
  it('should dispatch type RESET_PASSWORD', () => {
    expect(actions.resetPassword('').type).toEqual(types.RESET_PASSWORD);
  });

  it('should dispatch type FORM_SUBMIT', () => {
    expect(actions.formSubmit().type).toEqual(types.FORM_SUBMIT);
  });

  it('should dispatch type SUBMIT_SUCCESSFUL', () => {
    expect(actions.loadSubmitSuccessful('').type).toEqual(types.SUBMIT_SUCCESSFUL);
  });

  it('should dispatch type SUBMIT_FAILED', () => {
    expect(actions.loadSubmitFailure('').type).toEqual(types.SUBMIT_FAILED);
  });


  it('should dispatch type VALIDATE_EMAIL', () => {
    expect(actions.validateEmail('').type).toEqual(types.VALIDATE_EMAIL);
  });


  it('should dispatch type NON_MATCHING_PASSWORD', () => {
    expect(actions.comparePasswords('').type).toEqual(types.NON_MATCHING_PASSWORD);
  });

});
