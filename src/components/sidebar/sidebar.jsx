import React, { useEffect } from "react";
import s from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import FriendsBlock from "./friends";
import axios from "axios";

const SideBar = (props) => {
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users?page=2")
      .then((response) => {
        props.SetUsers(response.data.items);
      });
  });
  // useEffect(() => {
  //   try {
  //     axios
  //       .get("https://social-network.samuraijs.com/api/1.0/users?page=4")
  //       .then((response) => {
  //         props.SetUsers(response.data.items);
  //       });
  //   } catch (error) {
  //     if (error.response) {
  //       /*
  //        * The request was made and the server responded with a
  //        * status code that falls out of the range of 2xx
  //        */
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     } else if (error.request) {
  //       /*
  //        * The request was made but no response was received, `error.request`
  //        * is an instance of XMLHttpRequest in the browser and an instance
  //        * of http.ClientRequest in Node.js
  //        */
  //       console.log(error.request);
  //     } else {
  //       // Something happened in setting up the request and triggered an Error
  //       console.log("Error", error.message);
  //     }
  //     console.log(error);
  //   }
  // });
  let friendList = props.u.map((m) => m.followed && <FriendsBlock users={m} />);
  return (
    <div className={s.navbar}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogues"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Dialogues
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
      <br />
      <hr />
      <div className={s.item}>Friends</div>
      {friendList}
    </div>
  );
};
export default SideBar;
