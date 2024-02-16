import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import toggleSlice from "./toggleSlice";
import useSearchSlice from "./useSearchSlice";
import messageSlice from "./messageSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    toggle: toggleSlice,
    search: useSearchSlice,
    message: messageSlice,
  },
});

export default appStore;
