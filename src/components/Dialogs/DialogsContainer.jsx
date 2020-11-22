import React from "react";
import {
   onNewMessageChangeActionCreator,
   onSendMessageClickActionCreator,
} from "../../redux/dialogsReducer";
import styled, { css } from "styled-components";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
   let state = props.store.getState().messagesPage;

   const onNewMessageChange = (messageText) => {
      props.store.dispatch(onNewMessageChangeActionCreator(messageText));
   };

   const onSendMessageClick = () => {
      props.store.dispatch(onSendMessageClickActionCreator());
   };

   return (
      <Dialogs
         dialogs={state.dialogs}
         messages={state.messages}
         newMessageText={state.newMessageText}
         newMessageChange={onNewMessageChange}
         sendMessage={onSendMessageClick}
      />
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
   ${(props) =>
      props.primary &&
      css`
         background: palevioletred;
         color: white;
      `}
   ${(props) =>
      props.secondary &&
      css`
         background: palegoldenrod;
         color: white;
      `}
`;

//* ------------ EXPORT ------------- //

export default DialogsContainer;
