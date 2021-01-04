import {createSelector} from 'reselect'

export const getDialogs = (state) => {
	return state.messagesPage.dialogs
}

export const getMessagesSelector = (state) => {
	return state.messagesPage.messages
}
export const getMessages = createSelector(getMessagesSelector, (messages) => {
	return messages.filter(m => true)
})


export const getNewMessageText = (state) => {
	return state.messagesPage.newMessageText
}

