import React from "react";
import s from "./Header.module.css";
let Header=()=>{
  return <header className={s.header}>
    <div className={s.logo}><img className={s.img} src="./logo512.png"/>reactive people</div>
  
</header>
;
}
export default Header;