import React from "react";
import s from "./profile.module.css";
import AddPost from "./posts/AddPost/AddPost";
import MyPost from "./posts/MyPost/MyPost";
import UserInfo from "./UserInfo/UserInfo";
import store from "../../redux/redux-store"
let updatePost=()=>{
  store.dispatch({type:"UPDATE-NEW-POST-TEXT"})
};
let addPost=()=>{
  store.dispatch({type:"ADD-POST"})
};
let Profile=(props)=>{
  
  let printPosts = (props.posts).map(m => (<MyPost message={m.message} id={m.id} author={m.author} />));
  return <div className={s.content}>
    <UserInfo userInfo={props.userInfo}/>
    <hr/>
    <AddPost updatePost={updatePost} addPost={addPost} postText={props.postText}/>
    {printPosts}
    {/* <Profile /> */}
</div>
;
}
export default Profile;