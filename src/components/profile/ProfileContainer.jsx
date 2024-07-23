import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile, addPost, updatePost } from "../../redux/ProfileReducer";
import axios from "axios";
import { tooglePreloader } from "../../redux/UsersReducer";

const ProfileComponent = (props) => {
  useEffect(() => {
    props.tooglePreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          this.props.profile.id + 2
        }`
      )
      .then((response) => {
        props.tooglePreloader(false);
        props.setProfile(response.data);
      });
  }, []);
  return (
    <div>
      <Profile {...props} profile={props.profile} />
    </div>
  );
};

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
