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
  
  export const createUserProfileDocument = async (userAuth, additonalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
            const {displayName, email } = userAuth;
            const createdAt = new Date();
        
            try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            })
            } catch(error) {
            console.log('error creating user', error.message);
            }
        }

        return userRef;

      console.log(snapShot);
  }




  // Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;