import React from "react";
import { useSelector } from "react-redux";
import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

export const ErrorSignIn = () => {
  const { errorSignIn } = useSelector((state) => state.userReducer);

  return (
    <>
      <p className="text-xs font-semibold text-red-600">{errorSignIn}</p>
    </>
  );
};
export const ErrorSignUp = () => {
  const { errorSignUp } = useSelector((state) => state.userReducer);

  return (
    <>
      <p className="text-xs font-semibold text-red-600">{errorSignUp}</p>
    </>
  );
};

export function notifySignIn() {
  toast.error(<ErrorSignIn />);
}

export function notifySignUp() {
  toast.error(<ErrorSignUp />);
}

export default Error;
