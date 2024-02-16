import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: "Test@gmail.com",
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeuser: (state, action) => {},
  },
});

export const { adduser, removeuser } = userSlice.actions;
export default userSlice.reducer;
