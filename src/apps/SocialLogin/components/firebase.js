import firebase from 'firebase';
import config from '../../../config/config';

firebase.initializeApp(config.firebase);

// Export all providers to be user
export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
