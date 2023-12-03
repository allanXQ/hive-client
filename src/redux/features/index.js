import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import appSlice from "./app";

const rootReducer = combineReducers({
  user: userReducer,
  app: appSlice,
});

export default rootReducer;
