import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import timerReducer from "./timerReducer";

//пример болванки
// const reducer = (state = {}, action) => state;
// const store = createStore(reducer);

const rootReducer = combineReducers({
  timer: timerReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
