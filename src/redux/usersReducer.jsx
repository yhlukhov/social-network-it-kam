const SET_USERS = "SET_USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

const initialState = {
	users: [
		
	]
}

const usersReducer = (state=initialState, action) => {
	switch(action.type) {
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId)
						return {...user, follow: true}
					else return user
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId)
						return {...user, follow: false}
					else return user
				}),
			}
		default:
			return state
	}
}

export const setUsersAC = (users) => {
	return {
		type:SET_USERS,
		users
	}
}

export const followAC = (userId) => {
	return {
		type: FOLLOW, 
		userId
	}
}
export const unfollowAC = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	}
}

export default usersReducer