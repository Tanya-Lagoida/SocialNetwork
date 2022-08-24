import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import s from './App.module.css';
import { Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';

// type AppPropsType = {
//   appState: StateType
// }

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
          </div>
        </div>
      </div>
  );
};

export default App;
