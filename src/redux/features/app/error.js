import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  type: null,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    reportError: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearError: () => initialState,
  },
});

export const { reportError, clearError } = errorSlice.actions;
export const selectError = (state) => state.error;
export default errorSlice.reducer;
