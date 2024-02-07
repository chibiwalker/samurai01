import React from "react";
import s from "./UserInfo.module.css";

let UserInfo=(props)=>{
  return <div class={s.userInfo}>
    <img class={s.profileImage} src="./profile-img.JPG"/>
      <img  class={s.profileAvatar} src={props.userInfo.ava}/> 
      <div><h2 class={s.profileInfo}>{props.userInfo.name}</h2>
      <div class={s.profileInfo}>{props.userInfo.info}</div></div>
</div>
;
}
export default UserInfo;