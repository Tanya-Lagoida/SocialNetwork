import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import s from './App.module.css';
import { Route } from 'react-router-dom';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { LoginUser } from './components/Login/LoginUser';

const App = () => {
  return (
      <div>
        <div className={s.appWrapper}>
          <HeaderContainer/>
          <Navbar/>
          {/*<Sidebar sidebarItems={props.appState.sidebarPage.sidebarItems}/>*/}
          <div className={s.appWrapperContent}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
            <Route path='/dialogs' render={() => <DialogsContainer />}/>
            <Route path='/users' render={() => <UsersContainer />}/>
            <Route path='/login' render={() => <LoginUser />}/>
          </div>
        </div>
      </div>
  );
};

export default App;
