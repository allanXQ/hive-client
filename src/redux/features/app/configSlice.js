import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  topBar: {
    height: "50px",
  },
  drawer: {
    width: "200px",
    height: "100vh",
  },
  messageModal: {
    isOpen: false,
    type: "",
    message: "",
  },
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
    updateMessageModal: (state, action) => {
      state.messageModal = action.payload;
    },
  },
});

export const { updateTheme, updateMessageModal } = configSlice.actions;
export const selectTheme = (state) => state.config.theme;
export const selectTopBarHeight = (state) => state.config.topBar.height;
export const selectDrawerHeight = (state) => state.config.drawer.height;
export const selectDrawerWidth = (state) => state.config.drawer.width;
export const selectMessageModal = (state) => state.config.messageModal;

export default configSlice.reducer;
