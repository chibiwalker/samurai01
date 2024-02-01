import React from "react";
import s from "./Dialogues.module.css"
import { NavLink } from "react-router-dom";

const Dialogue=(props)=>{
    
    return( <div className={s.dialogue}>
             <div><NavLink to={`dialogues/${props.id}`}>{props.name}</NavLink></div>
   
        </div> 
    );
};

const Messages=(props)=>{
    return( <div className={s.dialogue}>
             <div>{props.message}</div>
        </div> 
    );
};
const Dialogues=()=>{
    let dialoguesData=[
        {name:"Lonely Wolf", id:"1"},
        {name:"Sad Girl", id:"2"},
        {name:"Ded Inside", id:"3"},
        {name:"Bro", id:"4"},
    ]
    let messages=[
        "woooooooooo", "ha a ya bro wolf?", "loneliest than before......."
    ]
    let printMessages = messages.map(m=>(<Messages message={m}/>));
    let printDialogues = dialoguesData.map(dialogue => (<Dialogue name={dialogue.name} id={dialogue.id}/>));
    return(
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