import React from "react";
import MyPosts from "./AllPosts/MyPosts";
import Post from "./AllPosts/Post/Post";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <section className={css.content}>
      <ProfileInfo img='https://arb.umn.edu/sites/arb.dl.umn.edu/files/styles/panopoly_image_original/public/media/farmmulticropbannercomposite_alinamd_shutterstock_757145218.jpg' />
      <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} setNewPostText={props.setNewPostText} />
    </section>
  );
};

export default Profile;
