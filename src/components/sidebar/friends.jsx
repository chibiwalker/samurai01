import React from "react";
import s from "./sidebar.module.css"
import userPhoto from "../../assets/images/defaultUserPhoto.png"
const FriendsBlock=(props)=>{
    return(
        <div className={s.usersList}>
            <img className={s.userimg} src={props.users.photos.small!=null? props.users.photos.small:userPhoto}/>
            <p className={s.userName}>{props.users.name}</p>
        </div>
    );
}
export default FriendsBlock;