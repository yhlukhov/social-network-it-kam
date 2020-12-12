import React from 'react'
import css from './ProfileBanner.module.css'

const ProfileBanner = (props) => {
   return (
      <div>
         <img className={css.mainImg} src={props.img} alt="Profile"></img>
      </div>
   )
}

export default ProfileBanner