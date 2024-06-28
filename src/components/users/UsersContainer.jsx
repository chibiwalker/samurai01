import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import axios from "axios";
import Preloader from "../../helpers/preloader";
import s from "./Users.module.css";
import {
  follow,
  unfollow,
  SetUsers,
  setTotalCount,
  SelectPage,
  tooglePreloader,
} from "../../redux/UsersReducer";
class UsersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: undefined };
  }
  componentDidMount() {
    this.props.tooglePreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}`
      )
      .then((response) => {
        this.props.tooglePreloader(false);
        this.props.SetUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  onPageChange = (page) => {
    this.props.SelectPage(page);
    this.props.tooglePreloader(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
      .then((response) => {
        this.props.tooglePreloader(false);
        this.props.SetUsers(response.data.items);
      });
  };
  handleInputChange = (event) => {
    const inputValue = Number(event.target.value);
    this.setState({ inputValue });
  };
  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users
          handleInputChange={this.handleInputChange}
          state={this.state}
          users={this.props.users}
          totalCount={this.props.totalCount}
          page={this.props.page}
          onPageChange={this.onPageChange}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.Users.users,
    page: state.Users.page,
    totalCount: state.Users.totalCount,
    isFetching: state.Users.isFetching,
  };
};
const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  SetUsers,
  setTotalCount,
  SelectPage,
  tooglePreloader,
})(UsersComponent);

export default UsersContainer;
