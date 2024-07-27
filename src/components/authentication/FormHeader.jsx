import React from "react";
import { FORM_BUTTON_SIGNIN, FORM_BUTTON_SIGNUP } from "../../utils/constants";

const FormHeader = ({ isSignIn }) => {
  return (
    <label className="mt-20 bg-gradient-to-tr from-white/70 to-white bg-clip-text text-3xl font-bold text-transparent">
      {isSignIn ? FORM_BUTTON_SIGNIN : FORM_BUTTON_SIGNUP}
    </label>
  );
};

export default FormHeader;
