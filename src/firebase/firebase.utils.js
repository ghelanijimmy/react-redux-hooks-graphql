import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD36rq34RNcO5Ae5yMbTOo2tgeZJaIqMeQ",
  authDomain: "crown-db-e692d.firebaseapp.com",
  projectId: "crown-db-e692d",
  storageBucket: "crown-db-e692d.appspot.com",
  messagingSenderId: "924403192101",
  appId: "1:924403192101:web:1ccdbc1076e69dacea0acc",
  measurementId: "G-C61EKLGH8R"
};

export const createUserProfileDocument = async (
  userAuth = {},
  additionalData = {}
) => {
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
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
