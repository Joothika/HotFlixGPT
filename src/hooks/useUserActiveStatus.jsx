import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onShowUserData, UserActiveStatus } from "../utils/ExportComponents";
import { auth } from "../../firebase.config";

const useUserActiveStatus = () => {
  const { userActive, name, phone, email, password } = useSelector(
    (state) => state.userReducer,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function userDataActiveStatus() {
      await onAuthStateChanged(auth, (credential) => {
        if (credential?.emailVerified) {
          console.log(auth.currentUser);
          dispatch(UserActiveStatus(true));
          dispatch(onShowUserData(auth.currentUser));
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
