import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import homePageReducer from "./homePageReducer";

export type AppStoreType = typeof store;

let rootReducer = combineReducers({
  homePage: homePageReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

let state = store.getState();

export type StateType = typeof state;
