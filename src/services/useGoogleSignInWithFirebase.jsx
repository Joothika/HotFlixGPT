import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { auth, db, provider } from "../../firebase.config";
import { useDispatch } from "react-redux";
import { setErrorSignIn, UserActiveStatus } from "../utils/ExportComponents";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
const useGoogleSignInWithFirebase = () => {
  const dispatch = useDispatch();
  async function sendUserDatatoDatabase(user) {
    console.log(user);
    if (!user) return;
    else {
      const { uid, displayName, email, emailVerified, photoURL } = user;
      const database = doc(db, "users", uid);
      const userData = {
        uid,
        displayName,
        email,
        emailVerified,
        photo: photoURL,
      };

      const getData = await getDoc(database);
      if (getData.exists()) {
        await getData.data();
      } else {
        await setDoc(database, userData);
        dispatch(
          setErrorSignIn(
            "You have successfully logged in. Enjoy with HotFlixGPT 😍",
          ),
        );
      }
    }
  }

  async function signInWithGoogle() {
    try {
      const res = await signInWithPopup(auth, provider);
      await onAuthStateChanged(auth, sendUserDatatoDatabase);
    } catch (err) {
      console.log(err.message, "google error");
    }
  }
  return signInWithGoogle;
};

export default useGoogleSignInWithFirebase;
