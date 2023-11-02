import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isRegistered: false,
  status: "idle",
  error: null,
  user: {
    userId: null,
    username: null,
    googleName: null,
    firstName: null,
    lastName: null,
    image: null,
    email: null,
    phone: null,
    balance: 0,
    portfolio: [],
    trades: [],
    deposits: [],
    withdrawals: [],
    transfers: [],
    spotOrders: [],
    p2pOrders: [],
    loanRequests: [],
    loanRepayments: [],
    swapOrders: [],
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
      .addMatcher(
        (action) => action.type.startsWith("api/call/pending"),
        (state, action) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("api/call/fulfilled"),
        (state, action) => {
          if (action.payload.slice !== "userData") return;
          state.status = "succeeded";
          switch (action.meta.arg.endpoint) {
            case "auth/register":
              state.isRegistered = true;
              break;
            case "auth/login":
              state.isLoggedIn = true;
              state.user = action.payload.data;
              break;
            case "auth/logout":
              state.isLoggedIn = false;
              state.user = initialState.user;
              break;
            case "user/user-info":
              state.user = action.payload.data.user;
              break;
            //to be updated
            case "user/transact/withdraw":
            case "user/transact/mpesa/deposit":
            case "user/transact/transfer":
              break;
            case "user/trade/spot/buy-limit":
            case "user/trade/spot/sell-limit":
              break;
            default:
              break;
          }
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("api/call/rejected"),
        (state, action) => {
          if (action.payload.slice !== "userData") return;
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsRegistered = (state) => state.user.isRegistered;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;

export const { loginSuccess, loginFailed, updateUser, logout } =
  userSlice.actions;
export default userSlice.reducer;
