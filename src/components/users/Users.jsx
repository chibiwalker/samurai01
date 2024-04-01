import React from "react";
import s from "./Users.module.css"
const Users = (props) => {
    return (<div className={s.user_table}><img className={s.userimg} src={props.ava}/>
    <p className={s.userinfo}><h2>{props.name}</h2>{props.bio}</p>
    </div>)
}
export default Users;