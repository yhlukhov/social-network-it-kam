import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
   setCurrentPage,
   toggleFollowInProgress,
   requestUsers,
   follow
} from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";
import { getCurrentPage, getFollowInProgress, getLoading, getPageSize, getTotalUsersCount, getUsers } from "../../redux/usersSelectors";


class UsersContainer extends React.Component {
   componentDidMount = () => {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
   };

   onPageChange = (page) => {
      this.props.setCurrentPage(page);
      this.props.requestUsers(page, this.props.pageSize)
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
               followInProgress={this.props.followInProgress}
               onPageChange={this.onPageChange}
            />
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      loading: getLoading(state),
      followInProgress: getFollowInProgress(state)
   }
}

const ActionCreators = {
   setCurrentPage,
   toggleFollowInProgress,
   requestUsers,
   follow
};

export default connect(mapStateToProps, ActionCreators)(UsersContainer);
