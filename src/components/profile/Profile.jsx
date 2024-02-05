import React from "react";
import s from "./profile.module.css";
import AddPost from "./posts/AddPost/AddPost";
import MyPost from "./posts/MyPost/MyPost";
import UserInfo from "./UserInfo/UserInfo";
let Content=(props)=>{
  let printPosts = (props.posts).map(m => (<MyPost message={m} />));
  return <div className={s.content}>
    <UserInfo/>
    <hr/>
    <AddPost/>
    {printPosts}
</div>
;
}
export default Content;