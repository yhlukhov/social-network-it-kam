import React from 'react'
import Post from './Post/Post'
import css from './MyPosts.module.css'



const MyPosts = (props) => {
   const postsItems = props.posts.map(post => {
      return <Post id={post.id} message={post.message} img={post.img} likesCount={post.likesCount} />
   })
   const newPostText = React.createRef();

   const setNewPostText = () => {
      props.setNewPostText(newPostText.current.value)
   }

   const addPost = () => {
      props.addPost()
      props.setNewPostText('')
   }

   return (
      <div>
         <div className={css.addPost}>
            <textarea ref={newPostText} onChange={setNewPostText} value={props.newPostText}></textarea>
            <button onClick={addPost}>Add post</button>
         </div>
         <div className={css.posts}>
            {postsItems}
         </div>
      </div>
   )
}

export default MyPosts