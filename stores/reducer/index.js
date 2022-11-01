import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import counter from "./counter";
import history from "./history";

export default combineReducers({
  auth,
  user,
  counter,
  history,
});
