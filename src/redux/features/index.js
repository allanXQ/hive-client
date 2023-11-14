import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import configReducer from "./app/configSlice";
import errorSlice from "./app/error";

const rootReducer = combineReducers({
  user: userReducer,
  config: configReducer,
  error: errorSlice,
});

export default rootReducer;
