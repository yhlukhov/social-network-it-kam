import React from "react";
import styled from "styled-components";
import css from "./Users.module.css";
import userAva from "../../assets/images/ava.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
   let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
   }

   return (
      <Container>
         <Paginator>
            {pages.map((p) => (
               <PageNumber
                  onClick={() => props.onPageChange(p)}
                  className={props.currentPage === p && css.selectedPage}
               >
                  {p}
               </PageNumber>
            ))}
         </Paginator>
         {props.users.map((user) => {
            return (
               <User key={user.id}>
                  <Avatar>
                     <NavLink to={{pathname:`/profile/${user.id}`, state: {user}}}>
                        <Image src={user.photos.small ? user.photos.small : userAva} alt="avatar" />
                     </NavLink>
                     {user.follow ? (
                        <Unfollow
                           onClick={() => {
                              props.unfollow(user.id);
                           }}
                        >
                           Unfollow
                        </Unfollow>
                     ) : (
                        <Follow
                           onClick={() => {
                              props.follow(user.id);
                           }}
                        >
                           Follow
                        </Follow>
                     )}
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
               </User>
            );
         })}
      </Container>
   );
};

export default Users;

//* CSS Styled Components (https://styled-components.com) *//

const Container = styled.section`
   border: 1px solid blue;
   border-radius: 5px;
`;
const User = styled.div`
   display: flex;
   margin: 5px;
`;
const Avatar = styled.div`
   display: flex;
   flex-direction: column;
   width: 70px;
   margin-right: 5px;
`;
const Image = styled.img`
   width: 100%;
`;
const Follow = styled.button`
   border: 1px solid turquoise;
   border-radius: 2px;
   background-color: paleturquoise;
`;
const Unfollow = styled.button`
   border: 1px solid #db7d9d;
   border-radius: 2px;
   background-color: #dd98af;
`;
const Details = styled.div`
   border: 1px solid lightgrey;
   border-radius: 15px;
   padding: 8px;
   width: 70%;
   display: flex;
   justify-content: space-between;
`;
const UserData = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;
const Location = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
`;
const Name = styled.div`
   font-size: 1.4em;
`;
const Status = styled.div`
   font-size: 1.1em;
`;
const Country = styled.div`
   font-size: 1.3em;
   margin-bottom: 5px;
`;
const City = styled.div`
   font-size: 1.3em;
`;
const Paginator = styled.div`
   display: flex;
   justify-content: center;
`;
const PageNumber = styled.span`
   font-size: x-small;
   margin: 1px;
   cursor: pointer;
`;
