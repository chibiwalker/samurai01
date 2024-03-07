import React from "react";
import Dialogues from "./Dialogues";
import store from '../../redux/redux-store.js';
let state=store.getState();   
let updateMessage=(text)=>{
        store.dispatch({type:"UPDATE-NEW-MESSAGE-TEXT", 
        messageText:text});
    };
let addMessage=()=>{
        store.dispatch({type:"ADD-MESSAGE"});
    };
const DialoguesContainer = () => {
    return <Dialogues updateMessage={updateMessage} addMessage={addMessage} m={state.Dialogues.messages} d={state.Dialogues}/>
}
export default DialoguesContainer;