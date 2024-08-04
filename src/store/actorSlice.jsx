import { createSlice } from "@reduxjs/toolkit";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    popularActors: [],
  },
  reducers: {
    onShowPopularActors(state, actions) {
      state.popularActors = actions.payload;
    },
  },
});
export const { onShowPopularActors } = actorSlice.actions;
export default actorSlice.reducer;
