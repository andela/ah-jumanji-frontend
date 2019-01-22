import axios from 'axios';
import * as types from './types';
import {editProfile} from './profile'
import { toast } from 'react-toastify';

const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET =  process.env.CLOUDINARY_UPLOAD_PRESET;
const formData = new FormData();

export const fileUploadHandler = (file, profile) => async dispatch => {
   
    try {
      if (file === null) {
        dispatch(editProfile(profile));
      } else {
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        dispatch(uploadingImage());
        await axios({
          url: CLOUDINARY_URL,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: formData
        }).then(res => {
  
          const secure_url = res.data.secure_url;
          dispatch(successfulImageUpload(res.data));
  
          profile.profile.profile_photo = secure_url;
          // Update profile
          dispatch(editProfile(profile));
        })
      } 
    } catch(error) {
      toast.dismiss();
      toast.error(error.response.data.error.message);
      dispatch(imageUploadFailed(error));
    }
  }

export const uploadingImage = () => {
   return {
    type: types.UPLOADING_IMAGE
   }
  }

export const successfulImageUpload = (imageData) => {
   return {
    type: types.SUCCESSFUL_IMAGE_UPLOAD,
    payload: imageData
   }
  }

export const imageUploadFailed = (error) => {
   return {
    type: types.IMAGE_UPLOAD_FAILED,
    payload: error
   }
  }