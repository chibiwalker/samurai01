
import React from "react";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";


let mapStateToProps=(state)=>{
    return({
    m: state.Dialogues.messages,
    d: state.Dialogues,
    u: state.Users.users
}
    )
}
let mapDispatchToProps=(dispatch)=>{
return ({
    updateMessage:(text)=>
    {
                dispatch({type:"UPDATE-NEW-MESSAGE-TEXT", 
                messageText:text})
    },
    addMessage:()=>{dispatch({type:"ADD-MESSAGE"})},
    SetUsers:(users)=>dispatch({type:"SET_USERS", users:users})
})
}
const DialoguesContainer= connect (mapStateToProps, mapDispatchToProps) (Dialogues)

export default DialoguesContainer;