import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import configReducer from "./app/configSlice";
import errorSlice from "./app/error";
import appSlice from "./app";

const rootReducer = combineReducers({
  user: userReducer,
  // config: configReducer,
  // error: errorSlice,
  app: appSlice,
});

export default rootReducer;
