import { authAPI } from "../API/api"

const SET_USER_DATA = "/auth/SET_USER_DATA"
const SET_LOGIN_ERROR = "/auth/SET_LOGIN_ERROR"

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
         }
      case SET_LOGIN_ERROR:
         return {
            ...state,
            loginError: action.loginError,
         }
      default:
         return state
   }
}

export const setAuthUserData = (id, email, login, isAuth) => {
   return {
      type: SET_USER_DATA,
      data: {
         id,
         email,
         login,
         isAuth,
      },
   }
}

export const getAuthUserData = () => async (dispatch) => {
   let resp = await authAPI.me()
   if (resp.resultCode === 0) {
      const user = resp.data
      dispatch(setAuthUserData(user.id, user.email, user.login, true))
   }
}

export const login = (email, password, remember) => async (dispatch) => {
   let resp = await authAPI.login(email, password, remember)
   if (resp.data.resultCode === 0) {
      dispatch(getAuthUserData())
   } else {
      console.log("login error")
   }
}

export const logout = () => async (dispatch) => {
   let resp = await authAPI.logout()
   if (resp.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}

export default authReducer
