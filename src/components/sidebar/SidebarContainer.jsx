import React from "react";
import SideBar from "./sidebar";
import { connect } from "react-redux";
const mapStateToProps=(state)=>{
  return{
    u:state.Users.users 
  }
}
const mapDispatchToProps=(dispatch)=>{
  return({
    SetUsers:(users)=>dispatch({type:"SET_USERS", users:users})
  })
}
const SideBarContainer = connect (mapStateToProps, mapDispatchToProps) (SideBar)
export default SideBarContainer;