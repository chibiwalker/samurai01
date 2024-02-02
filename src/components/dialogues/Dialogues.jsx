import React from "react";
import s from "./Dialogues.module.css"
import Dialogue from "./Dialogue/Dialogue";
import Messages from "./Messages/Messages";


const Dialogues = (props) => {
    // let dialoguesData = [
    //     { name: "Lonely Wolf", id: "1" },
    //     { name: "Sad Girl", id: "2" },
    //     { name: "Ded Inside", id: "3" },
    //     { name: "Bro", id: "4" },
    // ]
    // let messages = [
    //     "woooooooooo", "ha a ya bro wolf?", "loneliest than before......."
    // ]
    let printMessages = (props.m).map(m => (<Messages message={m} />));
    let printDialogues = (props.d).map(dialogue => (<Dialogue name={dialogue.name} id={dialogue.id} />));
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