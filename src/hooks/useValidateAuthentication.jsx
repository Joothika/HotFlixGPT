import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  notifySignUp,
  setErrorSignUp,
  notifySuccessSignUp,
} from "../utils/ExportComponents";

const useValidateAuthentication = ({ isSignIn }) => {
  const { email, password, name, phone } = useSelector(
    (state) => state.userReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const time = setTimeout(() => {
      validatePassword(password);
    }, 2000);
    return () => clearTimeout(time);
  }, [password]);

  useEffect(() => {
    const time = setTimeout(() => {
      validateEmail(email);
    }, 2000);
    return () => clearTimeout(time);
  }, [email]);

  useEffect(() => {
    const time = setTimeout(() => {
      validatePhone(phone);
    }, 2000);
    return () => clearTimeout(time);
  }, [phone]);

  function validatePassword(password) {
    const passwordRegex =
      /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
    if (!isSignIn) {
      if (!passwordRegex.test(password) && password !== null) {
        notifySignUp();
        return dispatch(
          setErrorSignUp(
            "Password should be length 0f 8 atleast with one charcter, one number and on special symbol",
          ),
        );
      }
      if (passwordRegex?.test(password)) {
        notifySuccessSignUp();
        return dispatch(setErrorSignUp("password matched"));
      }
    }
  }

  function validateEmail(email) {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!isSignIn) {
      if (!emailRegex.test(email) && email !== null) {
        notifySignUp();
        return dispatch(setErrorSignUp("Please add a valid email address"));
      }
      if (emailRegex.test(email)) {
        notifySuccessSignUp();
        return dispatch(setErrorSignUp("Email matched"));
      }
    }
  }

  function validatePhone(phone) {
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!isSignIn) {
      if (!phoneRegex.test(phone) && phone !== null) {
        notifySignUp();
        return dispatch(
          setErrorSignUp(
            "Please enetr a valid phone number with your country code",
          ),
        );
      }
      if (phoneRegex.test(phone)) {
        notifySuccessSignUp();
        return dispatch(setErrorSignUp("Phone number is valid"));
      }
    }
  }

  return null;
};

export default useValidateAuthentication;
