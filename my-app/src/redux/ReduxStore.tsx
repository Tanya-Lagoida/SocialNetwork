import { combineReducers, createStore } from 'redux';
import { profileReducer } from './ProfileReducer';
import { dialogsReducer } from './DialogsReducer';
import { sidebarReducer } from './SidebarReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer
})


export type AppStateType = ReturnType<typeof reducers>
export let store = createStore(reducers);

