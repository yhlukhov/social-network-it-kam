import React from "react";
import {
   onNewMessageChangeActionCreator,
   onSendMessageClickActionCreator,
} from "../../redux/dialogsReducer";
import styled, { css } from "styled-components";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

// function DialogsContainer() {

//    return (
//       <StoreContext.Consumer>
//          {(store) => {
//             let state = store.getState().messagesPage;

//             const onNewMessageChange = (messageText) => {
//                store.dispatch(onNewMessageChangeActionCreator(messageText));
//             };

//             const onSendMessageClick = () => {
//                store.dispatch(onSendMessageClickActionCreator());
//             };

//             return (
//                <Dialogs
//                   dialogs={state.dialogs}
//                   messages={state.messages}
//                   newMessageText={state.newMessageText}
//                   newMessageChange={onNewMessageChange}
//                   sendMessage={onSendMessageClick} />
//             );
//          } }
//       </StoreContext.Consumer>
//    );
// }

///////////////////////////////////////////////

const mapStateToProps = (state) => {
   debugger
   return {
      dialogs: state.messagesPage.dialogs,
      messages: state.messagesPage.messages,
      newMessageText: state.messagesPage.newMessageText
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      newMessageChange: (messageText)=>{
         dispatch(onNewMessageChangeActionCreator(messageText))
      },
      sendMessage: ()=>{
         dispatch(onSendMessageClickActionCreator())
      }
   }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

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

export default SuperDialogsContainer;
