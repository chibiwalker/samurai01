import React from "react";
import s from "./nav.module.css";
import { NavLink } from "react-router-dom";
let NavBar=()=>{
  return <nav className={s.navbar}>
     <div><NavLink to="/profile" className={navData=>navData.isActive? s.active:s.item}>Profile</NavLink></div> 
     <div><NavLink to="/dialogues" className={navData=>navData.isActive? s.active:s.item} >Dialogues</NavLink></div> 
    <div><NavLink to="/news" className={navData=>navData.isActive? s.active:s.item}>News</NavLink></div>  
     <div><NavLink to="/music" className={navData=>navData.isActive? s.active:s.item}>Music</NavLink></div> 
      <div><NavLink to="/settings" className={navData=>navData.isActive? s.active:s.item}>Settings</NavLink></div>
      
</nav>
;
}
export default NavBar;