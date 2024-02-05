import React from "react";
import s from "./profile.module.css";
import AddPost from "./posts/AddPost/AddPost";
import MyPost from "./posts/MyPost/MyPost";
import UserInfo from "./UserInfo/UserInfo";
let Content=()=>{
  return <div className={s.content}>
    <UserInfo/>
    <hr/>
    <AddPost/>
    <MyPost message="I am just a lonely wolf on a lonely road alone..."/>
    <MyPost message="A strong man is not the one who had never falled but who have falled, awakened, and go forward..."/>
    <MyPost message="May the road be your table cloth, stranger..."/>
</div>
;
}
export default Content;