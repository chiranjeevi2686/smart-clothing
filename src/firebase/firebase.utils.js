import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqL41EIKdNm4AKhYmyW5jIH9Bv5CZWgj4",
    authDomain: "smart-db-ff490.firebaseapp.com",
    databaseURL: "https://smart-db-ff490.firebaseio.com",
    projectId: "smart-db-ff490",
    storageBucket: "smart-db-ff490.appspot.com",
    messagingSenderId: "869263916832",
    appId: "1:869263916832:web:7eed16f55f1b40c5536145",
    measurementId: "G-L31591BHVM"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;