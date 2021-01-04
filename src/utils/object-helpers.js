export const setFollow = (users, id, state) => 
 users.map((user) => {
	if (user.id === id) return { ...user, followed: state }
	else return user
})