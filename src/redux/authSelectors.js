export const getUserId = (state) => {
	return state.auth.id
}
export const getEmail = (state) => {
	return state.auth.email
}
export const getLogin = (state) => {
	return state.auth.login
}
export const getIsAuth = (state) => {
	return state.auth.isAuth
}