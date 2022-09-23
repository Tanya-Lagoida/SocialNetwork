import {
  ActionsType,
  FollowAC,
  SetCurrentPageAC,
  SetTotalUsersCountAC,
  SetUsersAC,
  UnFollowAC,
  ToggleIsFetchingAC, FollowingInProgressAC
} from './state';
import { getUsers, unFollow } from '../api/api';
import { follow } from '../api/api';

export type UserType = {
  id: number
  photos: { small: string, large: string }
  followed: boolean
  name: string
  status: string
  location: { country: string, city: string }
}

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
};

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return (
        {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            } else return u;
          })
        });
    case 'UNFOLLOW':
      return (
        {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return { ...u, followed: false };
            } else return u;
          })
        });
    case 'SET_USERS':
      return { ...state, users: action.users };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SET_TOTAL_COUNT':
      return { ...state, totalUsersCount: action.count };
    case 'TOGGLE_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'FOLLOWING_IN_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };

    default:
      return state;

  }
};

export const followSuccess = (userId: number): FollowAC => ({ type: 'FOLLOW', userId: userId })
export const unFollowSuccess = (userId: number): UnFollowAC => ({ type: 'UNFOLLOW', userId })
export const setUsers = (users: UserType[]): SetUsersAC => ({ type: 'SET_USERS', users })
export const setCurrentPage = (currentPage: number): SetCurrentPageAC => ({ type: 'SET_CURRENT_PAGE', currentPage })
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountAC => ({ type: 'SET_TOTAL_COUNT', count: totalUsersCount })
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAC => ({ type: 'TOGGLE_IS_FETCHING', isFetching })
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): FollowingInProgressAC => ({ type: 'FOLLOWING_IN_PROGRESS',isFetching, userId })

export const getUsersThunk = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    getUsers(currentPage, pageSize)
      .then((data: { items: UserType[]; totalCount: number; }) => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      });
  };
}

export const onPageChangedThunk = (pageNumber: number, pageSize: number) => (dispatch: any) => {
  dispatch(setCurrentPage(pageNumber))
  dispatch(toggleIsFetching(true))
  getUsers(pageNumber, pageSize)
    .then((data: { items: UserType[]; }) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
    });
}

export const followThunk = (id: number) => (dispatch: any) => {
  dispatch(toggleFollowingInProgress(true, id))
  follow(id)
    .then((response: { data: { resultCode: number; }; }) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(id))
      }
      dispatch(toggleFollowingInProgress(false, id))
    })
}

export const unFollowThunk = (id: number) => (dispatch: any) => {
  dispatch(toggleFollowingInProgress(true, id))
  unFollow(id)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unFollowSuccess(id))
      }
     dispatch(toggleFollowingInProgress(false, id))
    })
}





