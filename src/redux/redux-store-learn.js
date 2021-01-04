import faker from "faker";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
   _state: {
      profilePage: {
         posts: [
            {
               id: 1,
               img:
                  "https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg",
               message: "Hi, how are you?",
               likesCount: 4,
            },
            {
               id: 2,
               img:
                  "https://tlum.ru/uploads/3c126f283ac4081e73b5f41d8d33951bb09ac94aa01a2e0cdd1cff8283c39b5e.jpeg",
               message: "Hello, i'm fine, how are you?",
               likesCount: 3,
            },
            {
               id: 3,
               img:
                  "https://i.insider.com/5ebf0f16aee6a826327d9111?width=600&format=jpeg&auto=webp",
               message: "I'm good too!",
               likesCount: 6,
            },
         ],
         newPostText: "",
      },

      messagesPage: {
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
      },
      sidebar: {
         friends: [
            {
               id: 1,
               name: "Dima",
               img: faker.image.avatar(),
            },
            {
               id: 2,
               name: "Olga",
               img: faker.image.avatar(),
            },
            {
               id: 3,
               name: "Inna",
               img: faker.image.avatar(),
            },
         ],
      },
   },
   _callSubscriber() {
      // observer comes from subscribe(observer)
   },
   subscribe(observer) { // observer function comes from index.js = renderEntireTree
      this._callSubscriber = observer;
   },

   getState() {
      return this._state;
   },

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)

      this._callSubscriber(this._state)
   },
};

export default store;
