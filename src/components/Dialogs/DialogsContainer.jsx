import {
   sendMessage,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getDialogs, getMessages, getNewMessageText } from "../../redux/dialogsSelectors";

const mapStateToProps = (state) => {
   return {
      dialogs: getDialogs(state),
      messages: getMessages(state),
      newMessageText: getNewMessageText(state),
   }
}

const ActionCreators = {
   sendMessage
}

export default compose(
   connect(mapStateToProps, ActionCreators),
   withAuthRedirect
)(Dialogs)
