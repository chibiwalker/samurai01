import React from "react";
import s from "./sidebar.module.css"

const FriendsBlock=(props)=>{
    return(
        <div className={s.usersList}>
            <img className={s.userimg} src={props.users.ava}/>
            <p className={s.userName}>{props.users.name}</p>
        </div>
    );
}
export default FriendsBlock;