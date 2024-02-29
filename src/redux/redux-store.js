import { combineReducers, createStore } from "redux";
import DialoguesReducer from "./DialoguesReducer";
import ProfileReducer from "./ProfileReducer";
let reducers=combineReducers({Dialogues: DialoguesReducer, Profile: ProfileReducer});
let store=createStore(reducers);
export default store;