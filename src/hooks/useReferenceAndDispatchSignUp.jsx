import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserName,
  getUserPhoneNumber,
  getUserEmail,
  getUserPassword,
} from "../utils/ExportComponents";
const useReference = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  function dispatchSignUpForUserName() {
    return dispatch(getUserName(nameRef.current.value));
  }

  const dispatchSignUpForUserPhone = function dispatchSignUpForUserPhone() {
    return dispatch(getUserPhoneNumber(phoneRef.current.value));
  };
  const dispatchSignUpForUserEmail = function dispatchSignUpForUserEmail() {
    return dispatch(getUserEmail(emailRef.current.value));
  };
  const dispatchSignUpForUserPassword =
    function dispatchSignUpForUserPassword() {
      return dispatch(getUserPassword(passwordRef.current.value));
    };

  return [
    nameRef,
    phoneRef,
    emailRef,
    passwordRef,
    dispatchSignUpForUserName,
    dispatchSignUpForUserPhone,
    dispatchSignUpForUserEmail,
    dispatchSignUpForUserPassword,
  ];
};

export default useReference;
