import * as types from  './actionTypes';
import * as actions from './loginActions';


describe('actions', () => {
    it('should create an action LOGIN_SUCCESS', () => {
        const user = {"user": {"email": "test@gmail.com", "password": "testpass"}};
        const expectedAction = {
        type: types.LOGIN_SUCCESS,
        user
      };
      expect(actions.LoginSucess(user)).toEqual(expectedAction);

    });
});