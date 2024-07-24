import React, { useEffect } from "react";
import s from "./profile.module.css";
import AddPost from "./posts/AddPost/AddPost";
import MyPost from "./posts/MyPost/MyPost";
import UserInfo from "./UserInfo/UserInfo";
import axios from "axios";
let Profile = (props) => {
  useEffect(() => {
    props.tooglePreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          props.profile.id + 2
        }`
      )
      .then((response) => {
        props.tooglePreloader(false);
        props.setProfile(response.data);
      });
  }, []);
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
