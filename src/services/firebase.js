import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import {
    appId,
    authDomain,
    databaseURL,
    firebaseApiKey,
    messagingSenderId,
    measurementId,
    projectId,
    storageBucket,
} from '../shared/constants/configs'

const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId

};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;