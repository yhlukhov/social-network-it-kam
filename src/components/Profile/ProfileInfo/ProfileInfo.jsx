import React from 'react'
import ProfileBanner from './ProfileBanner'
import css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
   return (
      <div>
         <ProfileBanner img={props.img} />
         <div>Ava + description</div>
      </div>
   )
}

export default ProfileInfo