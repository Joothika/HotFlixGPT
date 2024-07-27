import React, { useState } from "react";

const useToggleSignInForm = () => {
  const [isSignIn, setIsSignIn] = useState(null);
  function onToggleSignInandSignUp() {
    setIsSignIn((signIn) => !signIn);
  }
  return [isSignIn, onToggleSignInandSignUp];
};

export default useToggleSignInForm;
