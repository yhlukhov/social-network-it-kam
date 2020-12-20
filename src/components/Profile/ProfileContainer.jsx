import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import {getUserProfile, getProfileStatus, updateProfileStatus} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 12958
		this.props.getUserProfile(userId)
		this.props.getProfileStatus(userId)
	}
	render() {
		return (
			<Profile {...this.props} />
		)
	}
}

const mapStateToProps = (state) => {
	return {
		userProfile: state.profilePage.userProfile,
		profileStatus: state.profilePage.profileStatus,
		
	}
}

export default compose(
	connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
	withRouter,
	// withAuthRedirect
)(ProfileContainer)