import { combineReducers, createStore } from "redux";
import DialoguesReducer from "./DialoguesReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
let reducers=combineReducers({Dialogues: DialoguesReducer, Profile: ProfileReducer, Users: UsersReducer});
let store=createStore(reducers);
export default store;