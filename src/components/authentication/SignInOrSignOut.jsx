import React from "react";
import {
  Error,
  FormButton,
  FormFooter,
  FormHeader,
  FormInput,
  useToggleSignInForm,
} from "../../utils/ExportComponents";
import { Bounce, ToastContainer } from "material-react-toastify";

const SignInOrSignOut = () => {
  const [isSignIn, onToggleSignInandSignUp] = useToggleSignInForm();
  return (
    <>
      <ToastContainer
        position={"top-right"}
        autoClose={"5000"}
        draggablePercent={70}
        transition={Bounce}
        hideProgressBar={false}
        theme={"dark"}
      />
      <section className="overflow-y-hidden rounded-lg text-white">
        <form
          className="h-screen rounded-lg bg-black/50 max-[640px]:bg-black/60 max-[640px]:px-6 sm:mx-auto sm:h-[80vh] sm:w-[25rem] sm:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormHeader isSignIn={isSignIn} />
          <FormInput isSignIn={isSignIn} />
          <FormButton isSignIn={isSignIn} />
          <FormFooter
            isSignIn={isSignIn}
            onToggleSignInandSignUp={onToggleSignInandSignUp}
          />
        </form>
      </section>
    </>
  );
};

export default SignInOrSignOut;
