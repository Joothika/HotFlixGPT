import React from "react";
import { auth } from "../../firebase.config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  notifySignIn,
  notifySuccessSignIn,
  setErrorSignIn,
} from "../utils/ExportComponents";

const useSignInWithFirebase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.userReducer);

  const errorSignIn = function (err) {
    if (err.code === "auth/missing-email")
      return dispatch(
        setErrorSignIn("Plese add your email and password to login !!!"),
      );
    if (err.code === "auth/missing-password")
      return dispatch(
        setErrorSignIn("Please fill up the password to contine !!!"),
      );
    if (err.code === "auth/invalid-email" && email === "" && password === "")
      return dispatch(
        setErrorSignIn("Please fill up email and password to login !!!"),
      );
    if (err.code === "auth/invalid-email" && password === "")
      return dispatch(
        setErrorSignIn("Seems like you didn't add your password !!!"),
      );
    if (err.code === "auth/invalid-email" && email === "")
      return dispatch(
        setErrorSignIn("Seems like you didn't add your email !!!"),
      );
    if (err.code === "auth/invalid-email")
      return dispatch(setErrorSignIn("Invalid Email Address !!!"));

    if (err.code === "auth/invalid-credential")
      return dispatch(setErrorSignIn("Incorrect Email or Password !!!"));
  };

  function currentUserDetails(usercred) {
    const { emailVerified } = usercred;
    if (emailVerified) {
      navigate("/dashboard");
      return dispatch(
        setErrorSignIn("Continue your journey with HotFlixGPT 😍 "),
      );
    }
    if (!emailVerified) {
      notifySignIn();
      return dispatch(
        setErrorSignIn("please verify your email from your inbox to login! "),
      );
    }
  }

  async function signInUser() {
    console.log("sign in");
    try {
      console.log("inside try sigin");
      await signInWithEmailAndPassword(auth, email, password);
      await onAuthStateChanged(auth, currentUserDetails);
    } catch (err) {
      notifySignIn(err);
      console.log(err, 'sign in error');
      errorSignIn(err);
    }
  }
  return signInUser;
};

export default useSignInWithFirebase;
