import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { TextInput } from "../Common/FormControls/FormControls";
import { composeValidators, maxLength, required } from "../../utils/validators";

const NewMessageForm = ({
  sendMessage,
}) => {
  const onSubmit = (values) => {
    sendMessage(values.messageText)
  }
  return (
    <Form onSubmit={onSubmit}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit} style={{display:"flex"}}>
          <Field name="messageText" validate={composeValidators(required, maxLength(20))} >
            {
              ({input, meta}) => (
                <TextInput input={input} meta={meta} />
              )
            }
          </Field>
          <ButtonSend type="submit">Send message</ButtonSend>
        </form>
      )}
    />
  )
}

const Dialogs = ({
  dialogs,
  messages,
  sendMessage,
}) => {
  
  const dialogItems = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} img={dialog.img} />
  ));
  const messageItems = messages.map((message) => (
    <Message id={message.id} key={message.id} message={message.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogItems}</div>
      <div className={style.messages}>
        {messageItems}
        <NewMessageForm sendMessage={sendMessage} />
      </div>
    </div>
  );
};


//* ------------ BLOCK CSS ------------- //

const ButtonSend = styled.button`
  height: 34px;
  border: 1px solid lightblue;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;


//* ------------ EXPORT ------------- //

export default Dialogs;
