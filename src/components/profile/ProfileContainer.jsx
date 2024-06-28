import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import MyPost from "./posts/MyPost/MyPost";
import UserInfo from "./UserInfo/UserInfo";
import AddPost from "./posts/AddPost/AddPost";
import { setProfile, addPost, updatePost } from "../../redux/ProfileReducer";

class ProfileComponent extends React.Component {
  componentDidMount() {
    this.props.tooglePreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`
      )
      .then((response) => {
        this.props.tooglePreloader(false);
        this.props.SetProfile(response.data);
      });
  }
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

const ProfileContainer = connect(mapStateToProps, {
  addPost,
  updatePost,
  setProfile,
})(ProfileComponent);
export default ProfileContainer;
