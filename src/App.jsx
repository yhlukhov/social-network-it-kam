import "./App.css";
import { Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Navbar/Friends/Friends";

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          {/* Без параметров: 
          <Route exact path="/" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} /> */}
          
          <Route path="/profile" render={()=> <Profile profilePage={props.state.profilePage} addPost={props.addPost} setNewPostText={props.setNewPostText} /> } />
          <Route path="/dialogs" render={()=> <Dialogs messagesPage={props.state.messagesPage} sendNewMessage={props.sendNewMessage} setNewMessageText={props.setNewMessageText} newMessageText={props.state.messagesPage.newMessageText} />} />
          <Route path="/news" render={()=> <News />} />
          <Route path="/music" render={()=> <Music />} />
          <Route path="/settings" render={()=> <Settings />} />
        </div>
      </div>
  );
}

export default App;
