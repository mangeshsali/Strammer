import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import toggleSlice from "./toggleSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    toggle: toggleSlice,
  },
});

export default appStore;
