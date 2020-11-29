import Axios from "axios";
import React from "react";
import styled from "styled-components";
import userAva from "../../assets/images/ava.png"

const Users = ({ users, setUsers, follow, unfollow }) => {
	const getUsers = () => {
		if (users.length === 0) {
			Axios.get("https://social-network.samuraijs.com/api/1.0/users").then((resp) => {
				setUsers(resp.data.items);
			});
		}
	}

   return (
      <Container>
			<button onClick={getUsers}>Get Users</button>
         {users.map((user) => {
            return (
               <User key={user.id}>
                  <Avatar>
                     <Image src={user.photos.small ? user.photos.small : userAva} alt="avatar" />
                     {user.follow ? (
                        <Unfollow
                           onClick={() => {
                              unfollow(user.id);
                           }}
                        >
                           Unfollow
                        </Unfollow>
                     ) : (
                        <Follow
                           onClick={() => {
                              follow(user.id);
                           }}
                        >
                           Follow
                        </Follow>
                     )}
                  </Avatar>
                  <Details>
                     <UserData>
                        <Name>{user.name}</Name>
                        <Status>{user.status? user.status : "user.status"}</Status>
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
