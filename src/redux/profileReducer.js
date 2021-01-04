import faker from "faker"
import { profileAPI } from "../API/api"

const ADD_POST = "/profile/ADD-POST"
const SET_USER_PROFILE = "/profile/SET_USER_PROFILE"
const SET_PROFILE_STATUS = "/profile/SET_PROFILE_STATUS"
const DELETE_POST = "/profile/DELETE_POST"

let initialState = {
   posts: [
      {
         id: 1,
         img: "https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg",
         message: "Hi, how are you?",
         likesCount: 4,
      },
      {
         id: 2,
         img: "https://tlum.ru/uploads/3c126f283ac4081e73b5f41d8d33951bb09ac94aa01a2e0cdd1cff8283c39b5e.jpeg",
         message: "Hello, i'm fine, how are you?",
         likesCount: 3,
      },
      {
         id: 3,
         img: "https://i.insider.com/5ebf0f16aee6a826327d9111?width=600&format=jpeg&auto=webp",
         message: "I'm good too!",
         likesCount: 6,
      },
   ],
   userProfile: null,
   profileStatus: "",
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            newPostText: "",
            posts: [
               ...state.posts,
               {
                  id: state.posts.length + 1,
                  img: faker.image.image(),
                  message: action.postText,
                  likesCount: 0,
               },
            ],
         }
      case DELETE_POST:
         return {
            ...state,
            posts: [...state.posts].filter((p) => p.id !== action.postId),
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            userProfile: action.userProfile,
         }
      case SET_PROFILE_STATUS:
         return {
            ...state,
            profileStatus: action.status,
         }

      default:
         return state
   }
}

export const addPostActionCreator = (postText) => ({
   type: ADD_POST,
   postText,
})

export const deletePostActionCreator = (postId) => ({
   type: DELETE_POST,
   postId,
})

export const getUserProfile = (userId) => async (dispatch) => {
   let resp = await profileAPI.getProfile(userId)
   dispatch(setUserProfile(resp))
}
export const setUserProfile = (userProfile) => {
   return {
      type: SET_USER_PROFILE,
      userProfile,
   }
}

export const getProfileStatus = (userId) => async (dispatch) => {
   let resp = await profileAPI.getStatus(userId)
   dispatch(setProfileStatus(resp.data))
}
export const setProfileStatus = (status) => {
   return {
      type: SET_PROFILE_STATUS,
      status,
   }
}

export const updateProfileStatus = (status) => async (dispatch) => {
   let resp = await profileAPI.updateStatus(status)
   if (resp.data.resultCode === 0) {
      dispatch(setProfileStatus(status))
   }
}

export default profileReducer
