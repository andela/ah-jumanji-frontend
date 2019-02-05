import ErrorHandlingReducer from "./errorMessageReducer";
import * as actions from '../actions/actions';

describe('Test error message reducer', function () {
  it('should render return the right state', function () {
    let state = ErrorHandlingReducer({}, actions.default("", 500));
    expect(state).toBeDefined();
    expect(state).toEqual({
      "hasError": true,
      "message": "",
      "status": 500,
      "type": "NEW_ERROR_RAISED",
    });
  });
  it('should return default', function () {
    let state = ErrorHandlingReducer({}, "UNDEFINED");
    expect(state).toEqual({});
  });
});
