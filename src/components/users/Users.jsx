import React from "react";
import User from "./User";
import s from "./Users.module.css"
const Users = (props) => {
    let PrintUsers = (props.d.users).map(user => (<User name={user.name} bio={user.bio} ava={user.ava} />));
    return (<div>
        {PrintUsers}
    </div>)
}
export default Users;