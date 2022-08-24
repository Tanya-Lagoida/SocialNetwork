import { ActionsType, AuthType, SetUserDataAC } from './state';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
} as AuthType

export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType  = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':

      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

export const setUserData = (userId: number | null, email: string | null, login: string | null): SetUserDataAC => {
  return {
    type: 'SET_USER_DATA',
    data: {userId, email, login}
  }
}

