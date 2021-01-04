import React from "react";
import Post from "./Post/Post";
import { Form, Field } from "react-final-form";
import { required, maxLength, composeValidators } from "../../../utils/validators";
import css from "./MyPosts.module.css";
import { Textarea } from "../../Common/FormControls/FormControls";

const AddPostForm = (props) => {
   const onAddPost = (values) => props.addPost(values.postText);
   return (
      <Form
         onSubmit={onAddPost}
         render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={css.addPost}>
               <Field name="postText" validate={composeValidators(required, maxLength(10))}>
                  {({ input, meta }) => (
                     <Textarea input={input} meta={meta} placeholder={"post text"} />
                  )}
               </Field>
               <button type="submit" className={css.submitBtn}>
                  Add Post
               </button>
            </form>
         )}
      />
   );
};

const MyPosts = (props) => {
   const reversePosts = [...props.posts].reverse() // immutability of input data
   const postsItems = reversePosts.map((post) => {
      return <Post id={post.id} key={post.id} message={post.message} img={post.img} likesCount={post.likesCount} />;
   });
   console.log("MyPosts render")
   return (
      <div>
         <AddPostForm {...props} />
         <div className={css.posts}>{postsItems}</div>
      </div>
   );
};

export default MyPosts;
