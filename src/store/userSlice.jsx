import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    password: null,
    name: null,
    phone: null,
  },
  reducers: {
    getUserEmail(state, action) {
      state.email = action.payload;
      console.log(action.payload);
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
  },
});

export const {
  getUserEmail,
  getUserName,
  getUserPassword,
  getUserPhoneNumber,
} = userSlice.actions;

export default userSlice.reducer;
