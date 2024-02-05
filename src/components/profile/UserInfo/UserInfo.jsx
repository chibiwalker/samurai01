import React from "react";
import s from "./UserInfo.module.css";
import data from "../../../data";
let UserInfo=()=>{
  return <div class={s.userInfo}>
    <img class={s.profileImage} src="./profile-img.JPG"/>
      <img  class={s.profileAvatar} src={data.profilePage.personalData.ava}/> 
      <div><h2 class={s.profileInfo}>{data.profilePage.personalData.name}</h2>
      <div class={s.profileInfo}>{data.profilePage.personalData.info}</div></div>
</div>
;
}
export default UserInfo;