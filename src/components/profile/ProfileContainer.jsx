import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile, addPost, updatePost } from "../../redux/ProfileReducer";
import { tooglePreloader } from "../../redux/UsersReducer";

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
})(Profile);

export default ProfileContainer;
