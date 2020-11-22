import React from "react";
import {
   addPostActionCreator,
   setNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
   let state = props.store.getState();

   const onPostChange = (text) => {
      props.store.dispatch(setNewPostTextActionCreator(text));
   };

   const addPost = () => {
      props.store.dispatch(addPostActionCreator());
   };

   return (
      <MyPosts
         posts={state.profilePage.posts}
         newPostText={state.profilePage.newPostText}
         setNewPostText={onPostChange}
         addPost={addPost}
      />
   );
};

export default MyPostsContainer;
