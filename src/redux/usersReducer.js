import { usersAPI } from "../API/api"
import { setFollow } from "../utils/object-helpers"

const SET_USERS = "/users/SET_USERS"
const FOLLOW = "/users/FOLLOW"
const UNFOLLOW = "/users/UNFOLLOW"
const SET_CURRENT_PAGE = "/users/SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "/users/SET_TOTAL_COUNT"
const LOADING = "/users/LOADING"
const TOGGLE_FOLLOW_IN_PROGRESS = "/users/TOGGLE_FOLLOW_IN_PROGRESS"

const initialState = {
   users: [],
   pageSize: 100,
   totalUsersCount: 0,
   currentPage: 1,
   loading: false,
   followInProgress: [],
   fake: 10,
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case "FAKE":
         return { ...state, fake: state.fake + 1 }
      case SET_USERS:
         return {
            ...state,
            users: action.users,
         }
      case FOLLOW:
         return {
            ...state,
            users: setFollow(state.users, action.userId, true)
         }
      case UNFOLLOW:
         return {
            ...state,
            users: setFollow(state.users, action.userId, false)
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage,
         }
      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalCount,
         }
      case LOADING:
         return {
            ...state,
            loading: action.status,
         }
      case TOGGLE_FOLLOW_IN_PROGRESS:
         return {
            ...state,
            followInProgress: action.status
               ? [...state.followInProgress, action.userId]
               : state.followInProgress.filter((id) => id !== action.userId),
         }
      default:
         return state
   }
}

export const setUsers = (users) => {
   return {
      type: SET_USERS,
      users,
   }
}

export const followSuccess = (userId) => {
   return {
      type: FOLLOW,
      userId,
   }
}
export const unfollowSuccess = (userId) => {
   return {
      type: UNFOLLOW,
      userId,
   }
}

export const setCurrentPage = (currentPage) => {
   return {
      type: SET_CURRENT_PAGE,
      currentPage,
   }
}

export const setTotalCount = (totalCount) => {
   return {
      type: SET_TOTAL_COUNT,
      totalCount,
   }
}

export const loadPage = (status) => {
   return {
      type: LOADING,
      status,
   }
}

export const toggleFollowInProgress = (status, userId) => {
   return {
      type: TOGGLE_FOLLOW_IN_PROGRESS,
      status,
      userId,
   }
}

export const requestUsers = (page, size) => async (dispatch) => {
   dispatch(loadPage(true))
   let resp = await usersAPI.getUsers(page, size)
   dispatch(setUsers(resp.items))
   dispatch(setTotalCount(resp.totalCount))
   dispatch(loadPage(false))
}

export const follow = (userId, userFollowed) => async (dispatch) => {
   let apiMethod = userFollowed ? usersAPI.unfollow.bind(usersAPI) : usersAPI.follow.bind(usersAPI)
   let actionCreator = userFollowed ? unfollowSuccess : followSuccess
   dispatch(toggleFollowInProgress(true, userId))
   let resp = await apiMethod(userId)
   if (resp.resultCode === 0) {
      dispatch(actionCreator(userId))
   }
   dispatch(toggleFollowInProgress(false, userId))
}

export default usersReducer