import React from 'react'
import css from './Friends.module.css'

const Friends = (props) => {
   const friends = props.friends.map((friend, id) => {
      return (
         <div key={id} className={css.friend}>
            <img src={friend.img} alt=""/>
            <div>{friend.name}</div>
         </div>
      )
   })

   return (
      <div className={css.friends}>
         <h3>Friends</h3>
         <div className={css.friendsList}>
            {friends}
         </div>
      </div>
   )
}

export default Friends