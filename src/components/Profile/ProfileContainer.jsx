import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';


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
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))