import { ActionsType, AuthType, SetUserDataAC } from './state';
import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
} as AuthType;

export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':

      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataAC => {
  return {
    type: 'SET_USER_DATA',
    payload: { userId, email, login, isAuth }
  };
};

export const authUsersThunk = () => (dispatch: any) => {
  authAPI.authUsers()
    .then(response => {
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
};

export const loginUserThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
  authAPI.loginUser(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(authUsersThunk());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));
      }
    });
};

export const logoutUserThunk = () => (dispatch: any) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
};


