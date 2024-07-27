export { default as AuthHeader } from "../components/authentication/AuthHeader";
export { default as SignInOrSignOut } from "../components/authentication/SignInOrSignOut";
export { default as RootContent } from "../components/RootPage/RootContent";
export { default as FormInput } from "../components/authentication/FormInput";
export { default as FormButton } from "../components/authentication/FormButton";
export { default as FormHeader } from "../components/authentication/FormHeader";
export { default as FormFooter } from "../components/authentication/FormFooter";

/****** REUSABLE UI COMPONENTS *****/
export { default as Background } from "./Background";
export { default as Button } from "./Button";
export { default as InputBox } from "./InputBox";

/****** ALL IMAGES *****/
export { default as PRIMARY_LOGO } from "../../public/images/SECONDARY LOGO.png";

/****** ALL PAGES *****/
export { default as RootPage } from "../Pages/RootPage";
export { default as AuthenticationPage } from "../Pages/AuthenticationPage";
export { default as Dashboard } from "../Pages/Dashboard";

/****** ALL CUSTOM HOOKS *****/
export { default as useToggleSignInForm } from "../hooks/useToggleSignInForm";
export { default as useReferenceAndDispatchSignUp } from "../hooks/useReferenceAndDispatchSignUp";

/****** ALL REDUX STORE *****/
export { getUserEmail } from "../store/userSlice";
export { getUserName } from "../store/userSlice";
export { getUserPassword } from "../store/userSlice";
export { getUserPhoneNumber } from "../store/userSlice";
