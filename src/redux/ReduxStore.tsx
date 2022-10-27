import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './ProfileReducer';
import { dialogsReducer } from './DialogsReducer';
import { sidebarReducer } from './SidebarReducer';
import { usersReducer } from './UsersReducer';
import { authReducer } from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});


export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;


