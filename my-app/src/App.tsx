import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import s from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { StateType } from './redux/state';
import { Sidebar } from './components/Sidebar/Sidebar';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

type AppPropsType = {
  appState: StateType
  // dispatch: (action: ActionsType) => void
  // store: StoreType
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
                   render={() =>
                     <Profile />}/>
            <Route path={'/dialogs'}
                   render={() => <DialogsContainer />}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
