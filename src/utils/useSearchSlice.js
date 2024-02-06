import { createSlice } from "@reduxjs/toolkit";

const useSearchSlice = createSlice({
  name: "search",
  initialState: null,
  reducers: {
    searchQuerry: (state, action) => {
      return action.payload;
    },
  },
});

export const { searchQuerry } = useSearchSlice.actions;
export default useSearchSlice.reducer;
