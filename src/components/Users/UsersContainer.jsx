import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";
import Users from './Users'

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	} 
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => dispatch(setUsersAC(users)),
		follow: (userID) => dispatch(followAC(userID)),
		unfollow: (userID) => dispatch(unfollowAC(userID))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)