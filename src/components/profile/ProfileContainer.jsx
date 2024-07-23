import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile, addPost, updatePost } from "../../redux/ProfileReducer";
import axios from "axios";
import { tooglePreloader } from "../../redux/UsersReducer";

class ProfileComponent extends React.Component {
  componentDidMount() {
    this.props.tooglePreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          this.props.profile.id + 2
        }`
      )
      .then((response) => {
        this.props.tooglePreloader(false);
        this.props.setProfile(response.data);
      });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.Profile.posts,
    postText: state.Profile.newPostText,
    userInfo: state.Profile.personalData,
    profile: state.Profile.profile,
  };
};

const ProfileContainer = connect(mapStateToProps, {
  addPost,
  updatePost,
  setProfile,
  tooglePreloader,
})(ProfileComponent);
export default ProfileContainer;
