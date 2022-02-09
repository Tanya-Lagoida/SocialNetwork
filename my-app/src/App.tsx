import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import s from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { StateType } from './redux/state';
import { Sidebar } from './components/Sidebar/Sidebar';

type AppPropsType = {
  appState: StateType
  addPost: (newText: string) => void
  // onNewPostHandler: (newText: string) => void
}

const App = (props: AppPropsType) => {
  return (
    <BrowserRouter>
      <div>
        <div className={s.appWrapper}>
          <Header/>
          <Navbar/>
          <Sidebar sidebarItems={props.appState.sidebarPage.sidebarItems}/>
          <div className={s.appWrapperContent}>
            <Route path={'/profile'}
                   render={ () =>
                     <Profile
                     posts={props.appState.profilePage.posts}
                     addPost={props.addPost}
                     // onNewPostHandler={props.onNewPostHandler}
                   />} />
            <Route path={'/dialogs'}
                   render={ () => <Dialogs
                     dialogs={props.appState.dialogsPage.dialogs}
                     messages={props.appState.dialogsPage.messages}/>} />


          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
