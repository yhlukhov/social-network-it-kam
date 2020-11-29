import {
   onNewMessageChangeActionCreator,
   onSendMessageClickActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

//* ------------ EXPORT ------------- //
export default DialogsContainer;
