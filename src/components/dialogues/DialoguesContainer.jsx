import React from "react";
import s from "./Dialogues.module.css"
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import store from '../../redux/redux-store.js';
let state=store.getState();
const DialoguesContainer = () => {
    let newMessage=React.createRef();
    let printMessages = (state.Dialogues.messages).map(m => (<Messages message={m} />));
    let printDialogues = (state.Dialogues.users).map(user => (<Dialogue name={user.name} id={user.id} ava={user.ava} />));
    let updateMessage=()=>{
        store.dispatch({type:"UPDATE-NEW-MESSAGE-TEXT", 
        messageText: newMessage.current.value});
    };
    let addMessage=()=>{
        store.dispatch({type:"ADD-MESSAGE"});
    };
    return (
        <div className={s.dialoguesWindow}>

            <div className={s.dialogue}>
                 {printDialogues}
            </div>
            <div className={s.messages}>
                {printMessages}
             {/* <textarea onChange={updateMessage("123")}  value={state.Dialogues.newMessageText} cols="50"></textarea> */}
             <textarea ref={newMessage} onChange={updateMessage} value={state.Dialogues.newMessageText} cols="50"></textarea>
             <button onClick={addMessage}>Send</button>
            </div>
        </div>

    );
}
export default DialoguesContainer;