import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { config } from "./firebase.config";

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  
  if (!userAuth) {
    return;
  }
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...aditionalData,
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
