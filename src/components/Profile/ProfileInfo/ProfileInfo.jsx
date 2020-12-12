import React from 'react'
import ProfileBanner from './ProfileBanner'
import css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
   return (
      <div>
         <ProfileBanner img={props.img} />
         <div>props.user.name</div>
         <div>props.user.photos.large</div>
         <div>props.user.status</div>
         <div>props.user.followed</div>

      </div>
   )
}

export default ProfileInfo