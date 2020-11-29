import React from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";

const newPostText = React.createRef();

const MyPosts = (props) => {

  const postsItems = props.posts.map((post) => {
    return (
       <Post
          id={post.id}
          key={post.id}
          message={post.message}
          img={post.img}
          likesCount={post.likesCount}
       />
    );
 });

   const onPostChange = () => props.setNewPostText(newPostText.current.value);
   const onAddPost = () => props.addPost();

   return (
      <div>
         <div className={css.addPost}>
            <textarea
               ref={newPostText}
               onChange={onPostChange}
               value={props.newPostText}
            ></textarea>
            <button onClick={onAddPost}>Add post</button>
         </div>
         <div className={css.posts}>{postsItems}</div>
      </div>
   );
};

export default MyPosts;
