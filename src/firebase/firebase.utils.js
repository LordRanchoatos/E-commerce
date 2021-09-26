import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAfJq9GCfw3Iqu8uThGSv9DhOunr_gztEE",
    authDomain: "taylorgang-db.firebaseapp.com",
    projectId: "taylorgang-db",
    storageBucket: "taylorgang-db.appspot.com",
    messagingSenderId: "279121445246",
    appId: "1:279121445246:web:52b6021e7dab64bd60732f"
  };
  
  // Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;