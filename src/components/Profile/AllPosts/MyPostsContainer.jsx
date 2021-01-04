import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addPost: (postText)=>{
         dispatch(addPostActionCreator(postText))
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
