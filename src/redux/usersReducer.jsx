const SET_USERS = "SET_USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const LOADING = "LOADING"

const initialState = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage:1,
	loading:false
}

const usersReducer = (state=initialState, action) => {
	switch(action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.users
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
		case SET_CURRENT_PAGE:
			return {
				...state, currentPage:action.currentPage
			}
		case SET_TOTAL_COUNT:
			return {
				...state, totalUsersCount: action.totalCount
			}
		case LOADING:
			return {
				...state, loading: action.status
			}
		default:
			return state
	}
}

export const setUsers = (users) => {
	return {
		type:SET_USERS,
		users
	}
}

export const follow = (userId) => {
	return {
		type: FOLLOW, 
		userId
	}
}
export const unfollow = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	}
}

export const setCurrentPage = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}

export const setTotalCount = (totalCount) => {
	return {
		type: SET_TOTAL_COUNT,
		totalCount
	}
}

export const loadPage = (status) => {
	return {
		type: 'LOADING',
		status
	}
}

export default usersReducer