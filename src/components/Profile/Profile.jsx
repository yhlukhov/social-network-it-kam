import MyPostsContainer from "./AllPosts/MyPostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

   return (
      <section className={css.content}>
         <ProfileInfo userProfile={props.userProfile} img="https://arb.umn.edu/sites/arb.dl.umn.edu/files/styles/panopoly_image_original/public/media/farmmulticropbannercomposite_alinamd_shutterstock_757145218.jpg" />
         <MyPostsContainer />
      </section>
   );
};

export default Profile
