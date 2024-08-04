import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserActiveStatus } from "../utils/ExportComponents";
import { auth } from "../../firebase.config";

const useUserActiveStatus = () => {
  const { userActive, name, phone, email, password } = useSelector(
    (state) => state.userReducer,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function userDataActiveStatus() {
      console.log(userActive, "useracive");
      await onAuthStateChanged(auth, (credential) => {
        if (credential?.emailVerified) {
          console.log("user is here");
          dispatch(UserActiveStatus(true));
        }
        if (!credential) {
          dispatch(UserActiveStatus(false));
        }
      });
    }
    userDataActiveStatus();
    return () => userDataActiveStatus();
  }, []);
  return { userActive, name, phone, email, password };
};

export default useUserActiveStatus;
