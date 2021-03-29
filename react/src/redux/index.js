import { user } from "./reducers/user";
import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    user,
  })
);

export default store;
