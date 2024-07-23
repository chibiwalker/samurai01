import React from "react";
import s from "./UserInfo.module.css";
import userPhoto from "../../../assets/images/defaultUserPhoto.png";
let UserInfo = (props) => {
  return (
    <div class={s.userInfo}>
      <img class={s.profileImage} src="./profile-img.JPG" />
      <img
        class={s.profileAvatar}
        src={
          props.profile.photos.large != undefined
            ? props.profile.photos.large
            : userPhoto
        }
      />
      <div>
        <h2 class={s.profileInfo}>{props.profile.fullName}</h2>
        <div class={s.profileInfo}>
          {props.profile.lookingForAJobDescription}
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
