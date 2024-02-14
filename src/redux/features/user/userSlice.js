import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isRegistered: false,
  user: {
    userId: null,
    username: null,
    firstName: null,
    lastName: null,
    photoURL: null,
    email: null,
    phone: null,
    balance: 0,
    deposits: [],
    withdrawals: [],
    memberships: [],
    contributions: [],
    loanRequests: [],
    loanRepayments: [],
    referrals: [],
  },
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailed(state, action) {
      state.isLoggedIn = false;
      state.error = action.payload.error;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = initialState.user;
    },
    updateUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // .addMatcher(
      //   (action) => action.type.startsWith("api/call/pending"),
      //   (state, action) => {
      //   }
      // )
      .addMatcher(
        (action) => action.type.startsWith("api/call/fulfilled"),
        (state, action) => {
          if (action.payload.slice !== "userData") return;
          switch (action.meta.arg.endpoint) {
            case "auth/register":
              state.isRegistered = true;
              break;
            case "auth/login":
              state.isLoggedIn = true;
              state.user = action.payload.data;
              break;
            case "user/user-info":
              state.user = action.payload.data.user;
              break;
            //to be updated
            case "user/transact/withdraw":
            case "user/transact/mpesa/deposit":
            case "user/transact/transfer":
              break;
            default:
              break;
          }
        }
      );
  },
});

export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsRegistered = (state) => state.user.isRegistered;

export const { loginSuccess, loginFailed, updateUser, logout } =
  userSlice.actions;
export default userSlice.reducer;
