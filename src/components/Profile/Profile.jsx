import MyPostsContainer from "./AllPosts/MyPostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <section className={css.content}>
         <ProfileInfo
            userProfile={props.userProfile}
            profileStatus={props.profileStatus}
            updateProfileStatus={props.updateProfileStatus}
         />
         <MyPostsContainer />
      </section>
   );
};

export default Profile;
