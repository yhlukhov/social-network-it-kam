import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 2
		this.props.getUserProfile(userId)
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
	}
}

export default compose(
	connect(mapStateToProps, {getUserProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)