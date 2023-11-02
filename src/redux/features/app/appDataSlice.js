import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  klineInterval: "1h",
  activeAsset: "verdant",
  klineIntervals: [],
  assets: [],
  p2pTrades: [],
  spotTrades: [],
  status: "idle",
  error: null,
};

export const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    updateKlineInterval: (state, action) => {
      state.klineInterval = action.payload;
    },
    updateActiveAsset: (state, action) => {
      state.activeAsset = action.payload;
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
          if (action.payload.slice !== "appData") return;
          state.status = "succeeded";
          switch (action.meta.arg.endpoint) {
            case "app/p2p-trades":
              state.p2pTrades = action.payload.data;
              break;
            case "spot-trades":
              state.spotTrades = action.payload;
              break;
            case "kline-intervals":
              state.klineIntervals = action.payload;
              break;
            case "app/assets":
              state.assets = action.payload.data;
              break;
            default:
              break;
          }
        }
      )
      .addMatcher(
        (action) => action.type.startsWith("api/call/rejected"),
        (state, action) => {
          if (action.payload.slice !== "appData") return;
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export const selectKlineIntervals = (state) => state.appData.klineIntervals;
export const selectKlineInterval = (state) => state.appData.klineInterval;
export const selectActiveAsset = (state) => state.appData.activeAsset;
export const selectAssets = (state) => state.appData.assets;
export const selectP2PTrades = (state) => state.appData.p2pTrades;
export const selectAppDataStatus = (state) => state.appData.status;
export const selectAppDataError = (state) => state.appData.error;

export const { updateKlineInterval, updateActiveAsset } = appDataSlice.actions;
export default appDataSlice.reducer;
