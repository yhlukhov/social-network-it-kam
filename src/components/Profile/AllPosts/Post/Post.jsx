import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={css.item}>
      <img className={css.img} src={props.img} alt={props.message} />
      <div>{props.message}</div>
      <span>like {props.likesCount}</span>
    </div>
  );
};

export default Post;
