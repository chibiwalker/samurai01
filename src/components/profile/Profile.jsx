import React from "react";
import s from "./profile.module.css";
import AddPost from "./posts/AddPost/AddPost";
import MyPost from "./posts/MyPost/MyPost";
import UserInfo from "./UserInfo/UserInfo";
let Content=(props)=>{
  let printPosts = (props.posts).map(m => (<MyPost message={m.message} id={m.id} author={m.author} />));
  return <div className={s.content}>
    <UserInfo userInfo={props.userInfo}/>
    <hr/>
    <AddPost addPost={props.addPost} updatePost={props.updatePost}/>
    {printPosts}
</div>
;
}
export default Content;