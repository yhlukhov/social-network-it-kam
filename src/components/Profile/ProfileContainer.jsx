import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { getUserProfile, getProfileStatus, updateProfileStatus } from "../../redux/profileReducer"
import { Redirect, withRouter } from "react-router-dom"
import { compose } from "redux"
import { getUserProfileState, getProfileStatusState } from "../../redux/profileSelectors"
import { getUserId, getIsAuth } from "../../redux/authSelectors"

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId || this.props.userId
      if (userId !== null) {
         this.props.getUserProfile(userId)
         this.props.getProfileStatus(userId)
      }
   }
   render() {
      return this.props.isAuth && this.userId !== null ? <Profile {...this.props} /> : <Redirect to="/login" />
   }
}

const mapStateToProps = (state) => {
   return {
      userProfile: getUserProfileState(state),
      profileStatus: getProfileStatusState(state),
      userId: getUserId(state),
      isAuth: getIsAuth(state),
   }
}

export default compose(
   connect(mapStateToProps, { getUserProfile, getProfileStatus, updateProfileStatus }),
   withRouter
)(ProfileContainer)
