import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import css from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {

    const dialogItems = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />)
    const messageItems = props.messagesPage.messages.map(message => <Message id={message.id} message={message.message} />)

    const newMessageText = React.createRef();

    const setNewMessageText = () => {
        props.setNewMessageText(newMessageText.current.value)
    }

    const sendNewMessage = () => {
        props.sendNewMessage()
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogItems}
            </div>
            <div className={css.messages}>
                {messageItems}
                <div className={css.newMessage}>
                    <textarea ref={newMessageText} onChange={setNewMessageText} value={props.newMessageText}></textarea>
                    <button onClick={sendNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;