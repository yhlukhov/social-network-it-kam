import { usersAPI } from '../API/api'

const SET_USERS = "SET_USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const LOADING = "LOADING"
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS'

const initialState = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	loading: false,
	followInProgress: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
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
						return { ...user, follow: true }
					else return user
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId)
						return { ...user, follow: false }
					else return user
				}),
			}
		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.currentPage
			}
		case SET_TOTAL_COUNT:
			return {
				...state, totalUsersCount: action.totalCount
			}
		case LOADING:
			return {
				...state, loading: action.status
			}
		case TOGGLE_FOLLOW_IN_PROGRESS:
			return {
				...state,
				followInProgress: action.status
					? [...state.followInProgress, action.userId]
					: state.followInProgress.filter(id => id != action.userId)
			}
		default:
			return state
	}
}

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}

export const followSuccess = (userId) => {
	return {
		type: FOLLOW,
		userId
	}
}
export const unfollowSuccess = (userId) => {
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
		type: LOADING,
		status
	}
}

export const toggleFollowInProgress = (status, userId) => {
	return {
		type: TOGGLE_FOLLOW_IN_PROGRESS,
		status,
		userId
	}
}

export const getUsers = (page, size) => (dispatch) => {
	dispatch(loadPage(true))
	usersAPI.getUsers(page, size).then((resp) => {
		dispatch(setUsers(resp.items));
		dispatch(setTotalCount(resp.totalCount));
		dispatch(loadPage(false));
	});
}

export const follow = (userId) => (dispatch) => {
	dispatch(toggleFollowInProgress(true, userId))
	usersAPI.follow(userId).then((resp) => {
		if (resp.resultCode === 0) {
			dispatch(followSuccess(userId));
		}
		dispatch(toggleFollowInProgress(false, userId))
	})
}

export const unfollow = (userId) => (dispatch) => {
	dispatch(toggleFollowInProgress(true, userId))
	usersAPI.unfollow(userId).then(resp => {
		if (resp.resultCode === 0) {
			dispatch(unfollowSuccess(userId))
		}
		dispatch(toggleFollowInProgress(false, userId))
	})
}

export default usersReducer