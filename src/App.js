import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";


const App = (props) => {

  return (
      <div className="app-wrapper">
          <Header/>
          <Nav/>
          <div className="app-wrapper-content">
              <Route path="/dialogs" render={() => <DialogsContainer/> }/>
              <Route path="/profile" render={() => <Profile store={props.store}/> }/>

              <Route path="/users" render={() => <UsersContainer /> }/>

              <Route path="/news" render={() => <News/>}/>
              <Route path="/music" render={() => <Music/>}/>
              <Route path="/settings" render={() => <Settings/>}/>
          </div>
      </div>
  );
}

export default App;
