import { addPostActionCreator, setNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      setNewPostText: (text)=>{
         dispatch(setNewPostTextActionCreator(text))
      },
      addPost: ()=>{
         dispatch(addPostActionCreator())
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
