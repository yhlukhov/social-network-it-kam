import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, { addPostActionCreator, deletePostActionCreator } from './profileReducer';
	// 1. Test data
let state = {
	posts: [
		{
			id: 1,
			img:
				"https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg",
			message: "Hi, how are you?",
			likesCount: 4,
		},
		{
			id: 2,
			img:
				"https://tlum.ru/uploads/3c126f283ac4081e73b5f41d8d33951bb09ac94aa01a2e0cdd1cff8283c39b5e.jpeg",
			message: "Hello, i'm fine, how are you?",
			likesCount: 3,
		},
		{
			id: 3,
			img:
				"https://i.insider.com/5ebf0f16aee6a826327d9111?width=600&format=jpeg&auto=webp",
			message: "I'm good too!",
			likesCount: 6,
		},
	]
}

it('should add new post message', ()=>{
	let action = addPostActionCreator("it-kamasutra.com");
	let newState = profileReducer(state,action);
	expect (newState.posts[3].message).toBe('it-kamasutra.com')
})

it('should increment posts array length', ()=>{
	let action = addPostActionCreator("it-kamasutra.com");
	// 2. Action
	let newState = profileReducer(state,action);
	// 3. Expectation
	expect (newState.posts.length).toBe(4)
})

it('should delete element from posts array by post id', ()=>{
	let action = deletePostActionCreator(1)
	let newState = profileReducer(state, action)
	expect (newState.posts.length).toBe(2)
})