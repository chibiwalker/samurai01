import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import axios from "axios";

class UsersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: undefined };
  }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}`
      )
      .then((response) => {
        this.props.SetUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  onPageChange = (page) => {
    this.props.SelectPage(page);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
      .then((response) => {
        this.props.SetUsers(response.data.items);
      });
  };
  handleInputChange = (event) => {
    const inputValue = Number(event.target.value);
    this.setState({ inputValue });
  };
  render() {
    return (
      <Users
        handleInputChange={this.handleInputChange}
        state={this.state}
        users={this.props.users}
        totalCount={this.props.totalCount}
        page={this.props.page}
        onPageChange={this.onPageChange}
      />
    );
  }
}
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
        users: action,
      }),
    setTotalCount: (action) =>
      dispatch({ type: "SET_TOTAL_COUNT", totalCount: action }),
    SelectPage: (page) => dispatch({ type: "SELECT_PAGE", page: page }),
  };
};
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersComponent);

export default UsersContainer;
