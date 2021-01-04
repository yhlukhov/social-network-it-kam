import faker from "faker";

const SEND_MESSAGE = "/dialogs/SEND_MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case SEND_MESSAGE: {
         return {
            ...state,
            messages: [...state.messages, {
               id: state.messages.length + 1,
               message: action.messageText
            }]
         }
      }
      default:
         return state;
   }
};

export const sendMessage = (messageText) => {
   return {
      type: SEND_MESSAGE,
      messageText
   };
};

export default dialogsReducer;
