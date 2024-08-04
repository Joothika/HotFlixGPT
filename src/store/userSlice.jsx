import { createSlice } from "@reduxjs/toolkit";
import { check } from "prettier";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    password: null,
    name: null,
    phone: null,
    errorSignIn: null,
    errorSignUp: null,
    userActive: false,
  },
  reducers: {
    getUserEmail(state, action) {
      state.email = action.payload;
    },
    getUserPassword(state, action) {
      state.password = action.payload;
    },
    getUserName(state, action) {
      state.name = action.payload;
    },
    getUserPhoneNumber(state, action) {
      state.phone = action.payload;
    },
    setErrorSignIn(state, action) {
      state.errorSignIn = action.payload;
    },
    setErrorSignUp(state, action) {
      state.errorSignUp = action.payload;
    },
    UserActiveStatus(state, action) {
      state.userActive = action.payload;
    },
  },
});

export const {
  getUserEmail,
  getUserName,
  getUserPassword,
  getUserPhoneNumber,
  setErrorSignIn,
  setErrorSignUp,
  UserActiveStatus,
} = userSlice.actions;

export default userSlice.reducer;
