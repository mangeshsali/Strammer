import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import toggleSlice from "./toggleSlice";
import useSearchSlice from "./useSearchSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    toggle: toggleSlice,
    search: useSearchSlice,
  },
});

export default appStore;
