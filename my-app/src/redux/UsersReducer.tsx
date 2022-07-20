import {
  ActionsType,
  FollowAC,
  SetCurrentPageAC,
  SetTotalUsersCountAC,
  SetUsersAC,
  UnFollowAC
} from './state';

export type UserType = {
  id: number
  photos: {small: string, large: string}
  followed: boolean
  name: string
  status: string
  location: {country: string, city: string}
}

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
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
        });
    case 'UNFOLLOW':
      return (
        {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return { ...u, followed: false }
            } else return u
          })
        });
    case 'SET_USERS':
      return {...state, users: action.users};
    case 'SET_CURRENT_PAGE':
      return {...state, currentPage: action.currentPage};
    case 'SET_TOTAL_COUNT':
      return {...state, totalUsersCount: action.count};

    default: return state;

  }
}

export const followAC = (userId: number): FollowAC => {
  return {
    type: 'FOLLOW',
    userId: userId
  }
}
export const unFollowAC = (userId: number): UnFollowAC => {
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
export const setCurrentPageAC = (currentPage: number): SetCurrentPageAC => {
  return {
    type:'SET_CURRENT_PAGE',
    currentPage
  }
}
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountAC => {
  return {
    type:'SET_TOTAL_COUNT',
    count: totalUsersCount
  }
}