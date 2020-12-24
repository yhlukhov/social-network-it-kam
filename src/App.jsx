import "./App.css";
import { Route } from "react-router-dom";
import LoginContainer from './components/Login/LoginContainer'
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FontsTest from "./components/FontsTest";

function App() {
   return (
      <div className="app-wrapper">
         <HeaderContainer />
         <Navbar />
         <div className="app-wrapper-content">
            <Route exact path="/" render={() => <ProfileContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/login" render={()=> <LoginContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/fonts" render={() => <FontsTest />} />
         </div>
      </div>
   );
}

export default App;
