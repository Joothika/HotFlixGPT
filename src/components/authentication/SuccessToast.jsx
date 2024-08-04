import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

import React from "react";
import { useSelector } from "react-redux";

export const SuccessSignIn = () => {
  const { errorSignIn } = useSelector((state) => state.userReducer);

  return (
    <>
      <p className="text-xs font-semibold text-green-600">{errorSignIn}</p>
    </>
  );
};
export const SuccessSignUp = () => {
  const { errorSignUp } = useSelector((state) => state.userReducer);

  return (
    <>
      <p className="text-xs font-semibold text-green-600">{errorSignUp}</p>
    </>
  );
};

export function notifySuccessSignIn() {
  toast.success(<SuccessSignIn />);
  console.log("sucess");
}

export function notifySuccessSignUp() {
  toast.success(<SuccessSignUp />);
}

// export default SuccessToast;
