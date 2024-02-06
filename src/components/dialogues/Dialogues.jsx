import React from "react";
import s from "./Dialogues.module.css"
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";


const Dialogues = (props) => {
    let newMessage=React.createRef();
    let addMessage=()=>{
        let text=newMessage.current.value;
        alert(text);
    }
    let printMessages = (props.m).map(m => (<Messages message={m} />));
    let printDialogues = (props.d).map(user => (<Dialogue name={user.name} id={user.id} ava={user.ava} />));
    return (
        <div className={s.dialoguesWindow}>

            <div className={s.dialogue}>
                 {printDialogues}
            </div>
            <div className={s.messages}>
                {printMessages}
             <textarea ref={newMessage} cols="50"></textarea>
             <button onClick={addMessage}>Send</button>
            </div>
        </div>

    );
}
export default Dialogues;