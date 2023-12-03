import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedback: {
    message: null,
    type: null,
  },
  config: {
    theme: "dark",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    reportFeedback: (state, action) => {
      state.feedback.message = action.payload.message;
      state.feedback.type = action.payload.type;
    },
    updateTheme: (state) => {
      state.config.theme = state.config.theme === "light" ? "dark" : "light";
    },
  },
});

export const { reportFeedback, updateTheme } = appSlice.actions;
export const selectFeedback = (state) => state.app.feedback;
export const selectTheme = (state) => state.app.config.theme;

export default appSlice.reducer;
