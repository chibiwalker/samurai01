import React from "react";
import s from "./nav.module.css";
let NavBar=()=>{
  return <nav className={s.navbar}>
     <div className={s.active}><a href="/profile">Profile</a></div> 
     <div><a  href="/dialogues">Dialogues</a></div> 
    <div><a href="/news">News</a></div>  
     <div><a href="/music">Music</a></div> 
      <div><a href="/settings">Settings</a></div>
      
</nav>
;
}
export default NavBar;