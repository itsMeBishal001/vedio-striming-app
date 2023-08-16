import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchVedioSlice from "./searchVedioSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    searchVedios: searchVedioSlice,
  },
});

export default store;