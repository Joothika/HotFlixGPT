import React from "react";
import { Google } from "@mui/icons-material";
import Button from "../../utils/Button";
import {
  FORM_BUTTON_GSIGNIN,
  FORM_BUTTON_SIGNIN,
  FORM_BUTTON_SIGNUP,
  FORM_BUTTON_TYPE_LARGE,
} from "../../utils/constants";

const FormButton = ({ isSignIn }) => {
  async function signUpUser() {
    console.log("dgrg");
  }
  return (
    <>
      <Button
        content={isSignIn ? FORM_BUTTON_SIGNIN : FORM_BUTTON_SIGNUP}
        type={FORM_BUTTON_TYPE_LARGE}
        color={"bg-red-600 hover:bg-red-500"}
        addCss={"h-12 focus:ring focus:ring-red-500/50"}
        onClick={isSignIn ? "" : signUpUser}
      />

      {isSignIn && (
        <>
          <h1 className="my-4 text-center">OR</h1>
          <Button
            content={FORM_BUTTON_GSIGNIN}
            type={FORM_BUTTON_TYPE_LARGE}
            color={"bg-red-100/40 hover:bg-black/40"}
            addCss={"hover:text-red-600 relative p-auto h-12"}
          >
            <Google className="mr-2" />
          </Button>
        </>
      )}
    </>
  );
};

export default FormButton;
