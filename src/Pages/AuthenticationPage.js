import React from "react";
import {
  AuthHeader,
  Background,
  SignInOrSignOut,
} from "../utils/ExportComponents";

const AuthenticationPage = () => {
  return (
    <Background>
      <section className="h-screen overflow-hidden from-black/80 sm:bg-gradient-to-bl">
        <AuthHeader />
        <SignInOrSignOut />
      </section>
    </Background>
  );
};

export default AuthenticationPage;
