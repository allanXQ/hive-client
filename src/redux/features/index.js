import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import configReducer from "./app/configSlice";
import appDataSlice from "./app/appDataSlice";
import errorSlice from "./app/error";

const rootReducer = combineReducers({
  user: userReducer,
  config: configReducer,
  appData: appDataSlice,
  error: errorSlice,
});

export default rootReducer;
