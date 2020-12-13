import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import StyledComponents from "./components/StyledComponents/StyledComponents";
import StyledComponents2 from "./components/StyledComponents/StyledComponents2";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
   return (
      <div className="app-wrapper">
         <Header />
         <Navbar />
         <div className="app-wrapper-content">
            <Route exact path="/" render={() => <ProfileContainer />} />
            <Route path="/profile" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/styled" render={() => <StyledComponents />} />
            <Route path="/styled2" render={() => <StyledComponents2 />} />
         </div>
      </div>
   );
}

export default App;
