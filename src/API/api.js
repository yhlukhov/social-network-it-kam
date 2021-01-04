import Axios from "axios";

const axios = Axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': 'c08bb1bf-4028-4f92-8d52-3d5391ac7755'
   }
})

export const usersAPI = {
   getUsers: (page, count) => {
      return axios.get(
         `users?page=${page}&count=${count}`,
         { withCredentials: true }
      ).then(resp => resp.data)
   },
   follow: (userId) => {
      return axios.post(
         `follow/${userId}`, null,
         ).then(resp =>resp.data)
   },
   unfollow: (userId) => {
      return axios.delete(
         `follow/${userId}`,
         ).then(resp => resp.data)
   }
}

export const authAPI = {
   me: () => {
      return axios.get("auth/me").then(resp => resp.data)
   },
   login: (email, password, remember=false) => {
      return axios.post(
         `auth/login`,
         {
            email,
            password,
            remember
         }
      )
   },
   logout: () => {
      return axios.delete(`auth/login`)
   }
}

export const profileAPI = {
   getProfile: (userId) => {
      return axios.get(`profile/${userId || 2}`)
         .then(resp => resp.data)
   },
   getStatus: (userId) => {
      return axios.get(`profile/status/${userId}`)
   },
   updateStatus: (status) => {//user id не указываем, оно само возьмет из куки!?
      return axios.put(`profile/status`, {status: status})
   }
}