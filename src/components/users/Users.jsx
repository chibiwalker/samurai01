import React from "react";
import userPhoto from "../../assets/images/defaultUserPhoto.png";
import s from "./Users.module.css";
import pagination from "../../helpers/pagination";

const Users = (props) => {
  console.log(props.users);
  console.log(props.totalCount);
  let pagesCount = Math.ceil(props.totalCount / 10);
  let pages = [];
  console.log(pages);
  return (
    <div>
      <div className={s.pagination}>
        {pagination(props.page, pagesCount, pages).map((p) => (
          <span
            className={p == props.page && s.pageSelected}
            onClick={(e) => props.onPageChange(p)}
          >
            {" "}
            {p}
          </span>
        ))}
        <input
          for="pagination"
          type="number"
          min="1"
          max={pagesCount}
          onChange={props.handleInputChange}
        />
        <button
          id="pagination"
          onClick={(e) => props.onPageChange(props.state.inputValue)}
        >
          Go
        </button>
      </div>
      {props.users.map((u) => (
        <div className={s.user_table} key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={s.userimg}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span className={s.userinfo}>
            <h2>{u.name}</h2>
            <div>{u.status}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
