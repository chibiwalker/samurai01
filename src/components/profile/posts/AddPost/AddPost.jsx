import React from "react";
import s from "./AddPost.module.css";
let AddPost=()=>{
  return <div className={s.addPost}>
    <textarea placeholder="Enter Your post text..." cols="50"></textarea>
    <button>Add Post</button>
</div>
;
}
export default AddPost;