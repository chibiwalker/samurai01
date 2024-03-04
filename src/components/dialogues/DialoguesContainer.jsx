import React from "react";
import s from "./Dialogues.module.css"
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";
import store from '../../redux/redux-store.js';

const addMessageActionCreator={type:"UPDATE-NEW-MESSAGE-TEXT"}
let TestContainer=store.Dialogues;
const DialoguesContainer = () => {
    let newMessage=React.createRef();
    let updateMessage=()=>{
        let text=newMessage.current.value;
        store.dispatch({type:"UPDATE-NEW-POST-TEXT", newPost: text});
    }
    let addMessage=()=>{
        store.dispatch(addMessageActionCreator);
    }
    let printMessages = (TestContainer.messages).map(m => (<Messages message={m} />));
    let printDialogues = (TestContainer.users).map(user => (<Dialogue name={user.name} id={user.id} ava={user.ava} />));
    return (
        <div className={s.dialoguesWindow}>

            <div className={s.dialogue}>
                 {printDialogues}
            </div>
            <div className={s.messages}>
                {printMessages}
             <textarea onChange={updateMessage} ref={newMessage}  value={TestContainer.newMessageText} cols="50"></textarea>
             <button onClick={addMessage}>Send</button>
            </div>
        </div>

    );
}
export default DialoguesContainer;