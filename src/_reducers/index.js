import { combineReducers, createStore } from "redux";
import category from "./category";
import user from "./user";

const reducer = combineReducers({
  category: category.reducer,
  user: user.reducer,
});

const store = createStore(reducer);

export default store;
