import React from "react";
import s from "./Dialogues.module.css"
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";


const Dialogues = (props) => {
    let printMessages = (props.m).map(m => (<Messages message={m} />));
    let printDialogues = (props.d).map(user => (<Dialogue name={user.name} id={user.id} ava={user.ava} />));
    return (
        <div className={s.dialoguesWindow}>

            <div className={s.dialogue}>
                 {printDialogues}
            </div>
            <div className={s.messages}>
                {printMessages}
            </div>
        </div>

    );
}
export default Dialogues;