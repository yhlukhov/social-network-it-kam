import './index.css';
import state, { subscribe } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, setNewMessageText, setNewPostText, sendNewMessage } from './redux/state'
import { BrowserRouter } from 'react-router-dom';

export const renderEntireTree = (state) => {
   ReactDOM.render(
     <BrowserRouter>
       <App state={state} addPost={addPost} setNewPostText={setNewPostText} sendNewMessage={sendNewMessage} setNewMessageText={setNewMessageText} />
     </BrowserRouter>,
     document.getElementById('root')
   );
 }

renderEntireTree(state)

subscribe(renderEntireTree)