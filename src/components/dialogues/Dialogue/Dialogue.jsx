import React from "react";
import s from "../Dialogues.module.css";
import { NavLink } from "react-router-dom";

const Dialogue=(props)=>{
    
    return( <div className={s.dialogue}>
             <div><NavLink to={`dialogues/${props.id}`}>{props.name}</NavLink></div>
   
        </div> 
    );
};
export default Dialogue;