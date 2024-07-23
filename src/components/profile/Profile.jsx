import React from "react";
import s from "./profile.module.css";
import AddPost from "./posts/AddPost/AddPost";
import MyPost from "./posts/MyPost/MyPost";
import UserInfo from "./UserInfo/UserInfo";
let Profile = (props) => {
  let printPosts = props.posts.map((m) => (
    <MyPost message={m.message} id={m.id} author={m.author} />
  ));
  return (
    <div className={s.content}>
      <UserInfo profile={props.profile} />
      <hr />
      <AddPost
        updatePost={props.updatePost}
        addPost={props.addPost}
        postText={props.postText}
      />
      {printPosts}
    </div>
  );
};
export default Profile;
