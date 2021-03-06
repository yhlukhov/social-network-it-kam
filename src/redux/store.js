import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from "./usersReducer";
import appReducer from "./appReducer"

const reducers = combineReducers({
	app: appReducer,
	messagesPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer, 
	usersPage: usersReducer,
	auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store