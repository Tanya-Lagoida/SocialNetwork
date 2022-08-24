import { combineReducers, createStore } from 'redux';
import { profileReducer } from './ProfileReducer';
import { dialogsReducer } from './DialogsReducer';
import { sidebarReducer } from './SidebarReducer';
import { usersReducer } from './UsersReducer';
import { authReducer } from './AuthReducer';

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});


export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;


