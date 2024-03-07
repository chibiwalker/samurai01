import React from "react";
import store from "../../redux/redux-store"
import Profile from "./Profile";
let state=store.getState();
let updatePost=(text)=>{
  store.dispatch({type:"UPDATE-NEW-POST-TEXT",
  postText: text})
};
const addPost=()=>{
  store.dispatch({type:"ADD-POST"})
};
let ProfileContainer=()=>{
return <Profile updatePost={updatePost} addPost={addPost} postText={state.Profile.newPostText} posts={state.Profile.posts} userInfo={state.Profile.personalData}/>;
}
export default ProfileContainer;