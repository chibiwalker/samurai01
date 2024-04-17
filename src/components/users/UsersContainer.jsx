
import React from "react";
import Users from "./Users";
import { connect } from "react-redux";


let mapStateToProps=(state)=>{
    console.log("mapStateToProps",{state})
    return({
    users: state.Users.users
}
    )
}
let mapDispatchToProps=(dispatch)=>{
return ({
    follow:(userId)=>dispatch({type:"FOLLOW", userId:userId}),
    unfollow:(userId)=>dispatch({type:"UNFOLLOW", userId:userId}),
    SetUsers:(users)=>dispatch({type:"SET_USERS", users:users})
})
}
const UsersContainer= connect (mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;