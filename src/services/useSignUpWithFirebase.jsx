import { useDispatch, useSelector } from "react-redux";
import {
  notifySignUp,
  notifySuccessSignUp,
  setErrorSignUp,
  useReferenceAndDispatchSignUp,
} from "../utils/ExportComponents";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.config";

const useSignUpWithFirebase = () => {
  const { name, phone, email, password } = useSelector(
    (state) => state.userReducer,
  );
  const dispatch = useDispatch();
  useReferenceAndDispatchSignUp();

  const errorSignUp = function (err) {
    if (err.code === "auth/email-already-in-use") {
      dispatch(
        setErrorSignUp("Email is alredy exists. SignIn to continue !!!"),
      );
    }

    if (err.code === "auth/admin-restricted-operation") {
      console.log("no error");
      dispatch(setErrorSignUp("Please fill up the details to proceed"));
    }
    if (err.code === "auth/invalid-email") {
      dispatch(setErrorSignUp("Invalid email, Please add valid email !!!"));
    }

    if (err.code === "auth/missing-email" || email === " ") {
      dispatch(
        setErrorSignUp(
          "Seems like you did't add your email, Please add your email  !!!",
        ),
      );
    }
    if (err.code === "auth/missing-password" && email && name) {
      dispatch(setErrorSignUp("Fill password to finish SignUp !!!"));
    }
    if (email && !name && !password) {
      dispatch(
        setErrorSignUp("Fill your name and password to finish SignUp !!!"),
      );
    }
  };

  async function currentUserDetails(user) {
    console.log("email user", user);
    if (!user) return;
    else {
      const { uid, email, emailVerified } = user;
      const database = doc(db, "users", uid);
      const userData = {
        uid,
        email,
        emailVerified,
        phone,
        password,
      };
      const getData = await getDoc(database);
      if (getData.exists()) {
        console.log(await getData.data());
      } else {
        await setDoc(database, userData);
      }
      if (!emailVerified) {
        notifySuccessSignUp();
        return dispatch(
          setErrorSignUp(
            "Congradulations for Signup with HotFlixGPT. Please Verify your mail to proceed 🚀",
          ),
        );
      }
    }
  }

  async function signUpUser() {
    try {
      console.log("signup");
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await onAuthStateChanged(auth, currentUserDetails);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      await sendEmailVerification(auth.currentUser);
    } catch (err) {
      console.log(err.message, "signup error");
      notifySignUp();
      errorSignUp(err);
    }
  }
  return signUpUser;
};

export default useSignUpWithFirebase;
