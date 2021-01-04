import React from "react"
import styled from "styled-components"
import Paginator from "./Paginator"
import User from "./User"

const Users = (props) => {
   return (
      <Container>
         <Paginator
            userCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChange={props.onPageChange}
            currentPage={props.currentPage}
         />
         {props.users.map((user) => (
            <User user={user} follow={props.follow} followInProgress={props.followInProgress} key={user.id} />
         ))}
      </Container>
   )
}

export default Users

//* CSS Styled Components (https://styled-components.com) *//

const Container = styled.section`
   border: 1px solid blue;
   border-radius: 5px;
`