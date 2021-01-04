import React from "react";
import styled from "styled-components";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileBanner from "./ProfileBanner";
import iconYes from "../../../assets/images/yes.png";
import iconNo from "../../../assets/images/no.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
   if (!props.userProfile) return <Preloader status={true} />;

   return (
      <div style={{marginBottom: "15px"}}>
         <ProfileBanner />
         <Profile>
            <img src={props.userProfile.photos?.large} alt="profile pic" />
            <div style={{ marginLeft: "10px" }}>
               <div style={{fontWeight: "bold"}}>{props.userProfile.fullName}</div>
               <div>{props.userProfile.aboutMe}</div>
               
               <div>
                  Looking for a job:
                  <img src={props.userProfile.lookingForAJob ? iconYes : iconNo} alt="looking job" />
               </div>
               <div>Description: {props.userProfile.lookingForAJobDescription}</div>
               <br />
               <div style={{fontWeight:"bold"}}>Контакты:</div>
               <div>Youtube: {props.userProfile.contacts.youtube}</div>
               <div>Facebook: {props.userProfile.contacts.facebook}</div>
               <div>VK: {props.userProfile.contacts.vk}</div>
               <div>Twitter: {props.userProfile.contacts.twitter}</div>
               <div>Instagram: {props.userProfile.contacts.instagram}</div>
               <div>Github: {props.userProfile.contacts.github}</div>
               <div>MainLink: {props.userProfile.contacts.mainLink}</div>
               <div>Website: {props.userProfile.contacts.website}</div>
            </div>
         </Profile>
         <div><ProfileStatus
            userId={props.userProfile.userId}
            status={props.profileStatus}
            updateProfileStatus={props.updateProfileStatus}
         /></div>
      </div>
   );
};

export default ProfileInfo;

const Profile = styled.section`
   margin: 5px;
   display: flex;
`;
