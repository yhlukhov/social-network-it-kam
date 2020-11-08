import React from "react";
import Post from "./Post/Post";
import css from "./Profile.module.css";

const Profile = () => {
  
  const posts = [
    {
      img: "https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg",
      message: "Hi, how are you?",
      likesCount: 4
    },
    {
      img: "https://tlum.ru/uploads/3c126f283ac4081e73b5f41d8d33951bb09ac94aa01a2e0cdd1cff8283c39b5e.jpeg",
      message: "Hello, i'm fine, how are you?",
      likesCount: 3
    },
    {
      img: "https://i.insider.com/5ebf0f16aee6a826327d9111?width=600&format=jpeg&auto=webp",
      message: "I'm good too!",
      likesCount: 6
    }
  ]

  const postsRender = posts.map(post => {
    return <Post message={post.message} img={post.img} likesCount={post.likesCount} />
  })
  
  return (
    <section>
      <div>
        <img className={css.mainImg} src="https://chemsec.org/app/uploads/2019/02/Lost-at-SEA.jpg"></img>
      </div>
      <div>Ava + description</div>
      <div>
        My Posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={css.posts}>
          {postsRender}
        </div>
      </div>
    </section>
  );
};

export default Profile;
