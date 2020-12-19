import {
   newMessageChange,
   sendMessage,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
   return {
      dialogs: state.messagesPage.dialogs,
      messages: state.messagesPage.messages,
      newMessageText: state.messagesPage.newMessageText,
   }
}

const ActionCreators = {
   newMessageChange,
   sendMessage
}

export default compose(
   connect(mapStateToProps, ActionCreators),
   withAuthRedirect
)(Dialogs)
