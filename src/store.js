import rootReducer from "./reducers";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk" 
import { applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

// export const wrapper = createWrapper(makeStore);
export default store;