import Axios from "axios";
import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalCount,
   loadPage,
} from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
   componentDidMount = () => {
      this.props.loadPage(true);
      Axios.get(
         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      ).then((resp) => {
         this.props.setUsers(resp.data.items);
         this.props.setTotalCount(resp.data.totalCount);
         this.props.loadPage(false);
      });
   };

   onPageChange = (p) => {
      this.props.setCurrentPage(p);
      this.props.loadPage(true);
      Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(
         (resp) => {
            this.props.setUsers(resp.data.items);
            this.props.loadPage(false);
         }
      );
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
   };
};

const ActionCreators = {
   setUsers,
   follow,
   unfollow,
   setCurrentPage,
   setTotalCount,
   loadPage,
};

export default connect(mapStateToProps, ActionCreators)(UsersContainer);
