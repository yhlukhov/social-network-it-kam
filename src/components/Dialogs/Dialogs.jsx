import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import styled, {css} from "styled-components";

let messageRef = React.createRef()



const Dialogs = (props) => {
  const dialogItems = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));
  const messageItems = props.messages.map((message) => (
    <Message id={message.id} message={message.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogItems}</div>
      <div className={style.messages}>
        {messageItems}
        <div className={style.newMessage}>
          <Textarea ref={messageRef} value={props.newMessageText}
            onChange={()=>props.newMessageChange(messageRef.current.value)}
          ></Textarea>
          <ButtonSend onClick={props.sendMessage} primary>Send message</ButtonSend>
        </div>
      </div>
    </div>
  );
};


//* ------------ BLOCK CSS ------------- //

const Textarea = styled.textarea`
  width: 200px;
  border: 1px solid lightblue;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
const ButtonSend = styled.button`
  border: 1px solid lightblue;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  ${props => props.primary && css`background: palevioletred; color: white`}
  ${props => props.secondary && css`background: palegoldenrod; color: white`}
`;


//* ------------ EXPORT ------------- //

export default Dialogs;
