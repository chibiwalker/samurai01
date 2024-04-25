import React from "react";
import SideBar from "./sidebar";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    u: state.Users.friends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SetFriends: (users) => dispatch({ type: "SET_FRIENDS", users: users }),
  };
};
const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);
export default SideBarContainer;
