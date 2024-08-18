import { configureStore } from "@reduxjs/toolkit";
import { useFetchDiscover } from "../utils/ExportComponents";
import userSlice from "./userSlice";
import dashboardSlice from "./dashboardSlice";
import movieSlice from "./movieSlice";
import TvShowSlice from "./TvShowSlice";
import actorSlice from "./actorSlice";
import detailsDisplaySlice from "./detailsDisplaySlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    userReducer: userSlice,
    dashboardReducer: dashboardSlice,
    movieReducer: movieSlice,
    TvShowReducer: TvShowSlice,
    actorReducer: actorSlice,
    detailsReducer: detailsDisplaySlice,
    searchReducer: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: useFetchDiscover,
      },
      serializableCheck: false,
    }),
});

export default store;
