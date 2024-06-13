import React from "react";
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.Users.users,
    page: state.Users.page,
    totalCount: state.Users.totalCount,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch({ type: "FOLLOW", userId: userId }),
    unfollow: (userId) => dispatch({ type: "UNFOLLOW", userId: userId }),
    SetUsers: (action) =>
      dispatch({
        type: "SET_USERS",
        users: action.users,
        totalCount: action.totalCount,
      }),
    SelectPage: (page) => dispatch({ type: "SELECT_PAGE", page: page }),
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
