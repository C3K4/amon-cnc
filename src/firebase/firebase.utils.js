import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4Ans5NEt8Rh1Cl61nNRQvO1DkbIYbjCA",
    authDomain: "amon-cnc.firebaseapp.com",
    databaseURL: "https://amon-cnc.firebaseio.com",
    projectId: "amon-cnc",
    storageBucket: "amon-cnc.appspot.com",
    messagingSenderId: "1083504075982",
    appId: "1:1083504075982:web:701b7b1a6620d415d19c9f",
    measurementId: "G-3MZLSWZVMZ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
      return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user',error.message);
      }
    }

    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
