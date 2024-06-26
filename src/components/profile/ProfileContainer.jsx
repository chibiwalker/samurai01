import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import MyPost from "./posts/MyPost/MyPost";
import UserInfo from "./UserInfo/UserInfo";
import AddPost from "./posts/AddPost/AddPost";
class ProfileComponent extends React.Component {
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.Profile.posts,
    postText: state.Profile.newPostText,
    userInfo: state.Profile.personalData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch({ type: "ADD-POST" });
    },
    updatePost: (text) => {
      dispatch({ type: "UPDATE-NEW-POST-TEXT", postText: text });
    },
  };
};

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
export default ProfileContainer;
