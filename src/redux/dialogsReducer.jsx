import faker from "faker";

const SEND_MESSAGE = "SEND_MESSAGE";
const SET_NEW_MESSAGE_TEXT = "SET_NEW_MESSAGE_TEXT";

let initialState = {
   messages: [
      {
         id: 1,
         message: "Hi",
      },
      {
         id: 2,
         message: "How are your learing?",
      },
      {
         id: 3,
         message: "Good, thanks",
      },
      {
         id: 4,
         message: "Bye-Bye!",
      },
   ],

   newMessageText: "",

   dialogs: [
      {
         id: 1,
         name: "Dima",
         img: faker.image.avatar(),
      },
      {
         id: 2,
         name: "Anna",
         img: faker.image.avatar(),
      },
      {
         id: 3,
         name: "Roma",
         img: faker.image.avatar(),
      },
      {
         id: 4,
         name: "Dina",
         img: faker.image.avatar(),
      },
      {
         id: 5,
         name: "Toma",
         img: faker.image.avatar(),
      },
   ],
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE: {
         const message_obj = {
            id: state.messages.length + 1,
            message: state.newMessageText,
         };
         state.messages.push(message_obj);
         state.newMessageText = "";
         return state;
      }
      case SET_NEW_MESSAGE_TEXT: {
         state.newMessageText = action.newMessageText;
         return state;
      }
      default:
         return state;
   }
};


export const onSendMessageClickActionCreator = () => {
   return {
      type: SEND_MESSAGE,
   };
};

export const onNewMessageChangeActionCreator = (text) => {
   return {
      type: SET_NEW_MESSAGE_TEXT,
      newMessageText: text,
   };
};


export default dialogsReducer;
