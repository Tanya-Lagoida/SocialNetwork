import { ActionsType, FollowAC, SetUsersAC, UnfollowAC } from './state';

export type UserType = {
  id: number
  photos: {small: string, large: string}
  followed: boolean
  name: string
  status: string
  location: {country: string, city: string}
}

const initialState = {
  users: [] as Array<UserType>
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'FOLLOW':
      return (
        {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return { ...u, followed: true }
            } else return u
          })
        })
    case 'UNFOLLOW':
      return (
        {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return { ...u, followed: false }
            } else return u
          })
        })
    case 'SET_USERS':
      return {...state, users: [...action.users]};

    default: return state;

  }
}

export const followAC = (userId: number): FollowAC => {
  return {
    type: 'FOLLOW',
    userId: userId
  }
}
export const unfollowAC = (userId: number): UnfollowAC => {
  return {
    type: 'UNFOLLOW',
    userId
  }
}
export const setUsersAC = (users: UserType[]): SetUsersAC => {
  return {
    type:'SET_USERS',
    users
  }
}