import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCwK0dvWpDP-xFMFGUFbb7DsD6IcdeQ0Jg",
    authDomain: "crwn-db-45acf.firebaseapp.com",
    databaseURL: "https://crwn-db-45acf.firebaseio.com",
    projectId: "crwn-db-45acf",
    storageBucket: "crwn-db-45acf.appspot.com",
    messagingSenderId: "1015160202889",
    appId: "1:1015160202889:web:f9795aa6f84360fdde8858",
    measurementId: "G-PP8Z1PT6W9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase;