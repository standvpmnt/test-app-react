import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAKaubTJRm_9o9g-XTOJz7VeimBQsJrNJ4",
  authDomain: "starting-react.firebaseapp.com",
  databaseURL: "https://starting-react.firebaseio.com",
  projectId: "starting-react",
  storageBucket: "starting-react.appspot.com",
  messagingSenderId: "1061341442478",
  appId: "1:1061341442478:web:211e206d6ce14b6ad4183f",
  measurementId: "G-T7N33EY4WN",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
