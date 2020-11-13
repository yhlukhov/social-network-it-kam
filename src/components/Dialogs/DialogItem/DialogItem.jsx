import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './DialogItem.module.css'

const DialogItem = (props) => {
   return (
      <div className={css.dialog}>
         <NavLink to={`/dialogs/${props.id}`}>
            <div className={css.userItem}>
               <img src={props.img} alt="" />
               <div className={css.userName}>{props.name}</div>
            </div>
         </NavLink>
      </div>
   )
}

export default DialogItem