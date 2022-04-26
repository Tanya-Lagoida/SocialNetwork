import { ActionsType, FollowAC, SetUsersAC, UnfollowAC } from './state';

export type UserType = {
  id: number
  photoUrl: string
  followed: boolean
  name: string
  status: string
  location: {country: string, city: string}
}

const initialState = {
  users: [
    {id: 1, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/girls-ava1.jpg', followed: true, name: 'Tanya', status: 'Hello', location: {country: 'Belarus,', city: 'Minsk'} },
    {id: 2, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/girls-ava1.jpg', followed: false, name: 'Sergej', status: 'I am boss', location: {country: 'Ukraine,', city: 'Kiev'} },
    {id: 3, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/girls-ava1.jpg', followed: false, name: 'Aleksej', status: 'Hello', location: {country: 'Ukraine,', city: 'Odessa'} },
    {id: 4, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/girls-ava1.jpg', followed: true, name: 'Margo', status: 'I am pretty', location: {country: 'Ukraine,', city: 'Kiev'} }

  ] as Array<UserType>
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      };
    case 'SET_USERS':
      return {...state, users: [...state.users, ...action.users]};

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