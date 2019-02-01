import * as types from '../actions/types';

export const initialState = {
  profile: {},
  profileImage: {},
  authorProfile: {}
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case types.VIEW_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    case types.VIEW_PROFILE_FAILED:
      return {
        error: action.error
      };
    case types.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    case types.EDIT_PROFILE_FAILED:
      return {
        error: action.payload
      };
    case types.SUCCESSFUL_IMAGE_UPLOAD:
      return {
       ...state,
       profileImage: action.payload
      };
    case types.IMAGE_UPLOAD_FAILED:
      return {
       error: action.payload
      };
    case types.VIEW_AUTHOR_PROFILE:
      return {
        ...state,
        authorProfile: action.author_profile
      };
    default:
     return state;
  }
}

export default profileReducer;
