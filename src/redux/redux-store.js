import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from "./usersReducer";

const reducers = combineReducers({
	messagesPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer, 
	usersPage: usersReducer
})

const store = createStore(reducers)

export default store