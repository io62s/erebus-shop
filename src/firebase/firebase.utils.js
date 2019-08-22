import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4EIKyHZZwrSq79fneidUcu69qqQiuaT8",
  authDomain: "maatshop-cfb67.firebaseapp.com",
  databaseURL: "https://maatshop-cfb67.firebaseio.com",
  projectId: "maatshop-cfb67",
  storageBucket: "",
  messagingSenderId: "932683264292",
  appId: "1:932683264292:web:5a45c3f48055aa9b"
};

export const createUserProfiledocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

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
      console.log("error creating user", error);
    }
  }
  //console.log(snapShot);
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
