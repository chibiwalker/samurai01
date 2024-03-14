import React from "react";
import SideBar from "./sidebar";
import { connect } from "react-redux";
const mapStateToProps=(state)=>{
  return{
    u: state.Dialogues.users 
  }
}
const mapDispatchToProps=(dispatch)=>{

}
const SideBarContainer = connect (mapStateToProps, mapDispatchToProps)(SideBar)
export default SideBarContainer;