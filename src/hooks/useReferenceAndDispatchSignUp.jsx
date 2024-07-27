import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  getUserName,
  getUserPhoneNumber,
  getUserEmail,
  getUserPassword,
} from "../utils/ExportComponents";
const useReference = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("abc@gmail.com");
  const passwordRef = useRef("abc1234");
  const nameRef = useRef("Abc");
  const phoneRef = useRef(5835823046);
  const dispatchSignUpForUserName = function dispatchSignUpForUserName() {
    console.log("user check in dispatchsignup");
    return dispatch(getUserName(nameRef.current.value));
  };
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
