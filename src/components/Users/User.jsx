import React from "react"
import styled from "styled-components"
import css from "./Users.module.css"
import userAva from "../../assets/images/ava.png"
import { NavLink } from "react-router-dom"


const User = ({user, ...props}) => {
            return (
               <Userr>
                  <Avatar>
                     <NavLink to={{ pathname: `/profile/${user.id}`, state: { user } }}>
                        <Image src={user.photos.small ? user.photos.small : userAva} alt="avatar" />
                     </NavLink>
                     <button
                        className={user.followed ? css.unfollow : css.follow}
                        disabled={props.followInProgress.find((id) => id === user.id)}
                        onClick={() => {
                           props.follow(user.id, user.followed)
                        }}
                     >
                        {user.followed ? "Unfollow" : "Follow"}
                     </button>
                  </Avatar>
                  <Details>
                     <UserData>
                        <Name>{user.name}</Name>
                        <Status>{user.status ? user.status : "user.status"}</Status>
                     </UserData>
                     <Location>
                        <Country>{"user.location.country"}</Country>
                        <City>{"user.location.city"}</City>
                     </Location>
                  </Details>
               </Userr>
            )

}

export default User

//* CSS Styled Components (https://styled-components.com) *//

const Userr = styled.div`
   display: flex;
   margin: 5px;
`
const Avatar = styled.div`
   display: flex;
   flex-direction: column;
   width: 70px;
   margin-right: 5px;
`
const Image = styled.img`
   width: 100%;
`
const Details = styled.div`
   border: 1px solid lightgrey;
   border-radius: 15px;
   padding: 8px;
   width: 70%;
   display: flex;
   justify-content: space-between;
`
const UserData = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
const Location = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
`
const Name = styled.div`
   font-size: 1.4em;
`
const Status = styled.div`
   font-size: 1.1em;
`
const Country = styled.div`
   font-size: 1.3em;
   margin-bottom: 5px;
`
const City = styled.div`
   font-size: 1.3em;
`
