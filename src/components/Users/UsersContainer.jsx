import Axios from "axios";
import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
   setCurrentPage,
   toggleFollowInProgress,
   getUsers,
   follow,
   unfollow
} from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
   componentDidMount = () => {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   };

   onPageChange = (page) => {
      this.props.setCurrentPage(page);
      this.props.getUsers(page, this.props.pageSize)
   };

   render() {
      return (
         <div>
            <Preloader status={this.props.loading} />
            <Users
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               followInProgress={this.props.followInProgress}
               onPageChange={this.onPageChange}
            />
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      loading: state.usersPage.loading,
      followInProgress: state.usersPage.followInProgress,
      
   };
};

const ActionCreators = {
   setCurrentPage,
   toggleFollowInProgress,
   getUsers,
   follow,
   unfollow
};

export default connect(mapStateToProps, ActionCreators)(UsersContainer);
