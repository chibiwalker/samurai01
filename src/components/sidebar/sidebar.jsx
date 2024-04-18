import React from "react";
import s from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import FriendsBlock from "./friends";
let SideBar=(props)=>{
let friendList=props.u.map(m=>(
  m.followed&&
<FriendsBlock users={m}/>
));
  return <div className={s.navbar}>
     <div><NavLink to="/profile" className={navData=>navData.isActive? s.active:s.item}>Profile</NavLink></div> 
     <div><NavLink to="/dialogues" className={navData=>navData.isActive? s.active:s.item} >Dialogues</NavLink></div> 
     <div><NavLink to="/users" className={navData=>navData.isActive? s.active:s.item}>Users</NavLink></div>
    <div><NavLink to="/news" className={navData=>navData.isActive? s.active:s.item}>News</NavLink></div>  
     <div><NavLink to="/music" className={navData=>navData.isActive? s.active:s.item}>Music</NavLink></div> 
      <div><NavLink to="/settings" className={navData=>navData.isActive? s.active:s.item}>Settings</NavLink></div>
      <br/>
      <hr/>
      <div className={s.item}>Friends</div>     
      {friendList} 
</div>
;
}
export default SideBar;