import React from "react";
import {
  useToggleSignInForm,
  InputBox,
  useReferenceAndDispatchSignUp,
} from "../../utils/ExportComponents";
import {
  FORM_BUTTON_EMAIL_PLACEHOLDER,
  FORM_BUTTON_NAME_PLACEHOLDER,
  FORM_BUTTON_PASSWORD_PLACEHOLDER,
  FORM_BUTTON_PHONE_PLACEHOLDER,
  FORM_EMAIL,
  FORM_PASSWORD,
  FORM_PHONE,
  FORM_TEXT,
} from "../../utils/constants";
import { useSelector } from "react-redux";

const FormInput = ({ isSignIn }) => {
  const [
    nameRef,
    phoneRef,
    emailRef,
    passwordRef,
    dispatchSignUpForUserName,
    dispatchSignUpForUserPhone,
    dispatchSignUpForUserEmail,
    dispatchSignUpForUserPassword,
  ] = useReferenceAndDispatchSignUp();
  const { email, password, name, phone } = useSelector(
    (state) => state.userReducer,
  );
  return (
    <>
      {!isSignIn && (
        <>
          <div className="mt-14">
            <InputBox
              type={FORM_TEXT.toLowerCase()}
              placeholder={FORM_BUTTON_NAME_PLACEHOLDER}
              specify={"transparent"}
              reference={nameRef}
              value={name}
              onChange={!isSignIn && dispatchSignUpForUserName}
            />
          </div>
          <div className="mt-8">
            <InputBox
              type={FORM_EMAIL.toLowerCase()}
              placeholder={FORM_EMAIL}
              specify={"transparent"}
              reference={emailRef}
              value={email}
              onChange={!isSignIn && dispatchSignUpForUserEmail}
            />
          </div>
          <div className="mt-8">
            <InputBox
              type={FORM_PHONE.toLowerCase()}
              placeholder={FORM_BUTTON_PHONE_PLACEHOLDER}
              specify={"transparent"}
              reference={phoneRef}
              value={phone}
              onChange={!isSignIn && dispatchSignUpForUserPhone}
            />
          </div>
        </>
      )}
      {isSignIn && (
        <div className="mt-8">
          <InputBox
            type={FORM_EMAIL.toLowerCase()}
            placeholder={FORM_BUTTON_EMAIL_PLACEHOLDER}
            specify={"transparent"}
            color={"bg-transparent outline-white/30"}
          />
        </div>
      )}
      <div className="mb-8 mt-8">
        <InputBox
          type={FORM_PASSWORD.toLowerCase()}
          placeholder={FORM_BUTTON_PASSWORD_PLACEHOLDER}
          specify={"transparent"}
          reference={passwordRef}
          value={password}
          onChange={!isSignIn && dispatchSignUpForUserPassword}
        />
      </div>
    </>
  );
};

export default FormInput;
