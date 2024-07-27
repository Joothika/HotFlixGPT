import React from "react";
import {
  FORM_BUTTON_SIGNIN,
  FORM_BUTTON_SIGNUP,
  FORM_BUTTON_TYPE_LINK,
  FORM_LINK_ACCOUNT_SIGNUP,
  FORM_LINK_ALREDY_SIGIN,
} from "../../utils/constants";
import Button from "../../utils/Button";

const FormFooter = ({ isSignIn, onToggleSignInandSignUp }) => {
  return (
    <label className="block text-center max-[300px]:mb-16 max-[300px]:mt-6 min-[200px]:mb-16 min-[200px]:mt-6 sm:mb-0 sm:mt-6">
      {isSignIn ? FORM_LINK_ACCOUNT_SIGNUP : FORM_LINK_ALREDY_SIGIN}
      <Button
        type={FORM_BUTTON_TYPE_LINK}
        content={isSignIn ? FORM_BUTTON_SIGNUP : FORM_BUTTON_SIGNIN}
        onClick={onToggleSignInandSignUp}
      />
    </label>
  );
};

export default FormFooter;
