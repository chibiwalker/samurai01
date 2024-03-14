import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
const mapStateToProps=(state)=>{
  return{
    posts: state.Profile.posts,
    postText:state.Profile.newPostText, 
    userInfo:state.Profile.personalData

  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addPost:()=>{
      dispatch({type:"ADD-POST"})},
    updatePost:(text)=>{
      dispatch({type:"UPDATE-NEW-POST-TEXT",
  postText: text})
    }
    }
  }

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile)
export default ProfileContainer;