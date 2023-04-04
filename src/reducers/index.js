// reducers/index.js

import { combineReducers } from "redux";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;