import faker from "faker";

let initialState = {
	friends: [
		{
			id: 1,
			name: "Dima",
			img: faker.image.image(),
		},
		{
			id: 2,
			name: "Olga",
			img: faker.image.image(),
		},
		{
			id: 3,
			name: "Inna",
			img: faker.image.image(),
		},
	],
}

const sidebarReducer = (state = initialState, action) => {
	return state
}

export default sidebarReducer