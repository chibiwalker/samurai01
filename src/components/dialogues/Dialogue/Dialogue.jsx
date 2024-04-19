import React from "react";
import s from "../Dialogues.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/images/defaultUserPhoto.png";

const Dialogue = (props) => {
  return (
    <div className={s.dialogue}>
      <div>
        <img
          className={s.userimg}
          src={props.ava != null ? props.ava : userPhoto}
        />
        <NavLink to={`/dialogues/${props.id}`}>{props.name}</NavLink>
      </div>
    </div>
  );
};
export default Dialogue;
