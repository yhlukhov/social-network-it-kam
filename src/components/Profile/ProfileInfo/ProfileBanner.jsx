import React from 'react'
import css from './ProfileBanner.module.css'
import banner from '../../../assets/images/prof_banner.jpg'

const ProfileBanner = (props) => {
   return (
      <div>
         <img className={css.mainImg} src={banner} alt="Profile"></img>
      </div>
   )
}

export default ProfileBanner