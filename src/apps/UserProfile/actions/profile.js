import axios from 'axios';
import { read_cookie } from 'sfcookies';
import { toast } from 'react-toastify';
import * as types from './types';


export const viewProfile = () => async dispatch => {
  dispatch(viewProfileRequest());
  let endpoint = process.env.GET_PROFILE_URL;
  const token = read_cookie('token');

  try {
    await axios.get(
      endpoint,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`
        }
      })
      .then(response => {
        dispatch(viewProfileSuccess(response.data.profile))
      })
  } catch (error) {
    toast.dismiss();
    toast.error(error.response.data.detail);
    dispatch(viewProfileFailed(error));
  }
  
};

export const editProfile = (profileData) => async dispatch => {
  
  let endpoint = process.env.EDIT_PROFILE_URL;
  const token = read_cookie('token');
  try {
      await axios.put(endpoint, profileData, { headers: { Authorization: `Token ${token}`}})
      .then(response => {
      dispatch(editProfileSuccess(response.data));
      toast.dismiss();
      toast.success('Profile has been updated', { autoClose: 1000});
      setTimeout(function() {
        window.location.replace('/profile');
      }, 1000);
      })
  } catch (error) {
    if (error.response.data.errors.hasOwnProperty('country')) {
      toast.dismiss();
      toast.error(error.response.data.errors.country[0]);
      dispatch(editProfileFailed(error));
    } else {
      toast.dismiss();
      toast.error(error.response.data.errors.website[0]);
      dispatch(editProfileFailed(error));
    }
  }
};

export const viewProfileRequest = () => {
  return {
    type: types.VIEW_PROFILE_REQUEST
  };
}

export const viewProfileSuccess = (user) => {
  return {
    type: types.VIEW_PROFILE_SUCCESS,
    payload: user
  };
}

export const viewProfileFailed = (error) => {
  return {
    type: types.VIEW_PROFILE_FAILED,
    payload: error
  }
}

export const editProfileSuccess = (profileData) => {
  return {
    type: types.EDIT_PROFILE_SUCCESS,
    payload: profileData
  }
}

export const editProfileFailed = (error) => {
  return {
    type: types.EDIT_PROFILE_FAILED,
    payload: error
  }
}

