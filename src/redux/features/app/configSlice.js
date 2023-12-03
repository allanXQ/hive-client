import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
  },
});

export const { updateTheme } = configSlice.actions;
export const selectTheme = (state) => state.config.theme;

export default configSlice.reducer;
