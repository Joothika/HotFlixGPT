import { createSlice } from "@reduxjs/toolkit";

const detailsDisplaySlice = createSlice({
  name: "details",
  initialState: {
    trailer: [],
    posters: [],
    content: [],
  },
  reducers: {
    onDisplayTrailer(state, actions) {
      state.trailer = actions.payload;
    },
    onDisplayPoster(state, actions) {
      state.posters = actions.payload;
    },
    onDisplayTrailerOrPosterContent(state, actions) {
      state.content = actions.payload;
    },
  },
});

export const {
  onDisplayTrailer,
  onDisplayPoster,
  onDisplayTrailerOrPosterContent,
} = detailsDisplaySlice.actions;
export default detailsDisplaySlice.reducer;
