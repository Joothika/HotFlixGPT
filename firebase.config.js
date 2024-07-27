import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXAHhWIsShJgMWhPiXthAciOUor1F2cf4",
  authDomain: "sample-be776.firebaseapp.com",
  projectId: "sample-be776",
  storageBucket: "sample-be776.appspot.com",
  messagingSenderId: "135625914355",
  appId: "1:135625914355:web:32c3e3895a0cafdf31c486",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
