import { ActionsType, AuthType, SetUserDataAC } from './state';
import { authAPI, ResultCodesEnum } from '../api/api';
import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './ReduxStore';
import { FormAction } from 'redux-form/lib/actions';

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

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType | FormAction>

export const authUsersThunk = (): ThunkType => (dispatch, getState) => {
  authAPI.authUsers()
    .then(response => {
      if (response.data.resultCode === ResultCodesEnum.Success) {
        const { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
};

export const loginUserThunk = (email: string, password: string, rememberMe: boolean): ThunkType | FormAction => (dispatch, getState) => {
  authAPI.loginUser(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(authUsersThunk());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));
      }
    });
};

export const logoutUserThunk = (): ThunkType => (dispatch, getState) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserData(null, null, null, false));
      }
    });
};


