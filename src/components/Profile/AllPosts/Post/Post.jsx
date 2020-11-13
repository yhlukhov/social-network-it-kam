import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={css.post}>
      <img className={css.img} src={props.img} alt={props.message} />
      <div>{props.message}</div>
      <span>likes: {props.likesCount}</span>
    </div>
  );
};

export default Post;
