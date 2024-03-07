import React from "react";
import s from "./MyPost.module.css";
let MyPost=(props)=>{
  return(
  <div className={s.postdiv}>
<img className={s.postimg} src="https://i.pinimg.com/originals/15/73/55/1573552eea49a6e910fdded020d65f81.jpg"/>
{props.message}
</div>
);
}
export default MyPost;