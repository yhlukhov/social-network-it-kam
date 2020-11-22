import faker from "faker";

let initialState = {
	friends: [
		{
			id: 1,
			name: "Dima",
			img: faker.image.avatar(),
		},
		{
			id: 2,
			name: "Olga",
			img: faker.image.avatar(),
		},
		{
			id: 3,
			name: "Inna",
			img: faker.image.avatar(),
		},
	],
}

const sidebarReducer = (state = initialState, action) => {
	return state
}

export default sidebarReducer