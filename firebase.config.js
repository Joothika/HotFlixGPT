import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu2z_nVkWYCxzHJYJinH7egz9eFwuOxrQ",
  authDomain: "hotflixgpt-2024.firebaseapp.com",
  projectId: "hotflixgpt-2024",
  storageBucket: "hotflixgpt-2024.appspot.com",
  messagingSenderId: "873186679289",
  appId: "1:873186679289:web:e382976d9b7ea0dad34528",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "en";
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
