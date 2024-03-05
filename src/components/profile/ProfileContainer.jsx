import React from "react";
import s from "./profile.module.css";
import AddPost from "./posts/AddPost/AddPost";
import MyPost from "./posts/MyPost/MyPost";
import UserInfo from "./UserInfo/UserInfo";
import store from "../../redux/redux-store"
let state=store.getState();
let updatePost=(text)=>{
  store.dispatch({type:"UPDATE-NEW-POST-TEXT",
  postText: text
})
};
const addPost=()=>{
  store.dispatch({type:"ADD-POST"})
};
let Profile=()=>{
  
  let printPosts = (state.Profile.posts).map(m => (<MyPost message={m.message} id={m.id} author={m.author} />));
  return <div className={s.content}>
    <UserInfo userInfo={state.Profile.personalData}/>
    <hr/>
    <AddPost updatePost={updatePost} addPost={addPost} postText={state.Profile.newPostText}/>
    {printPosts}
</div>
;
}
export default Profile;