import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import counter from "./counter";
import signup from "./signUp";

export default combineReducers({
  auth,
  user,
  counter,
  signup,
});
