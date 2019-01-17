import firebase from 'firebase';

const firebase_config = {
  apiKey: 'AIzaSyDLqlYrfTIkjXb01oA_9svo107jkV-YzAg',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN
};

firebase.initializeApp(firebase_config);

// Export all providers to be user
export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
