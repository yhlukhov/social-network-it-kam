import faker from 'faker';

const ADD_POST = "ADD-POST";
const SET_NEW_POST_TEXT = "SET-NEW-POST-TEXT";

let initialState = {
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
   newPostText: "it-kamasutra",
   userProfile: null
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            newPostText: '',
            posts: [...state.posts, {
               id: 5,
               img: faker.image.avatar(),
               message: state.newPostText,
               likesCount: 0
            }]
         }
         
      case SET_NEW_POST_TEXT:
         return {
            ...state,
            posts: [...state.posts],
            newPostText: action.newPostText
         }
      case 'SET_USER_PROFILE':
         return {
            ...state,
            userProfile: action.userProfile
         }
		default: return state
	}
};


export const addPostActionCreator = () => ({
   type: ADD_POST,
});

export const setNewPostTextActionCreator = (text) => {
   return {
      type: SET_NEW_POST_TEXT,
      newPostText: text,
   };
};

export const setUserProfile = (userProfile) => {
	return {
		type: 'SET_USER_PROFILE',
		userProfile
	}
}


export default profileReducer