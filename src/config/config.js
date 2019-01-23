const baseUrl = process.env.BASE_URL;

const config = {
  api: {
    loginUrl: baseUrl + '/api/users/login',
    emailReset: baseUrl + '/api/users/reset_password',
    emailResetConfirm: baseUrl + '/api/users/reset_password_confirm/',
    registerUrl: baseUrl + '/api/users/register',
    activateUserUrl: baseUrl + '/api/users/activate',
    getProfileUrl: baseUrl + '/api/profiles/users/profiles',
    editProfileUrl: baseUrl + '/api/profiles/users/profiles'
  },
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY || 'random',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN
  },
  avatarImage: {
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLzZszQbQf6jkknIGI8A3rj-0BoEngyi9156njfrCjPED9_b2vw'
  },
  cloudinary: {
    cloudinaryUrl: 'https://api.cloudinary.com/v1_1/authors-haven-jumanji/upload',
    cloudinaryUploadPreset: 'jcuci4hq'
  }
};

export default config;
