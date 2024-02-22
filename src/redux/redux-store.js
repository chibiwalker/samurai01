import { combineReducers, configureStore } from "redux";
import DialoguesReducer from "./DialoguesReducer";
import ProfileReducer from "./ProfileReducer";
let reducers=combineReducers(DialoguesReducer, ProfileReducer);
let store=configureStore(reducers);
export default store;