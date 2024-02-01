import React from "react";
import s from "./content.module.css";
import AddPost from "./posts/AddPost/AddPost";
import MyPost from "./posts/MyPost/MyPost";
let Content=()=>{
  return <div className={s.content}>
    <div><img class={s.profileImage} src="./profile-img.JPG"/></div>
    <div>ava+info</div>
    <AddPost/>
    <MyPost message="I am just a lonely wolf on a lonely road alone..."/>
    <MyPost message="A strong man is not the one who had never falled but who have falled, awakened, and go forward..."/>
    <MyPost message="May the road be your table cloth, stranger..."/>
</div>
;
}
export default Content;