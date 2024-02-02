import React from "react";
import s from "../Dialogues.module.css";

const Messages=(props)=>{
    return( <div className={s.dialogue}>
             <div>{props.message}</div>
        </div> 
    );
};
export default Messages;