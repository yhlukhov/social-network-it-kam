import React from "react";
import MyPostsContainer from "./AllPosts/MyPostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <section className={css.content}>
         <ProfileInfo img="https://arb.umn.edu/sites/arb.dl.umn.edu/files/styles/panopoly_image_original/public/media/farmmulticropbannercomposite_alinamd_shutterstock_757145218.jpg" />
         <MyPostsContainer
            store={props.store}
            // posts={props.profilePage.posts}
            // newPostText={props.profilePage.newPostText}
            // dispatch={props.dispatch}
         />
      </section>
   );
};

export default Profile;
