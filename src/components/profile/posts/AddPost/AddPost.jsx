import React from "react";
import s from "./AddPost.module.css";
let AddPost=(props)=>{
  let newPost=React.createRef();
  const addPosts=()=>{
    props.addPost();
   };
   const updatePost=()=>{
    let text=newPost.current.value;
    props.updatePost(text);
   }
  return <div className={s.addPost}>
    <textarea ref={newPost} onChange={updatePost} placeholder="Enter Your post text..." cols="50"></textarea>
    <button onClick={addPosts}>Add Post</button>
</div>
;
}
export default AddPost;