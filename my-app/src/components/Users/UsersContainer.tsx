import React from 'react';
import { AppStateType } from '../../redux/ReduxStore';
import { Dispatch } from 'redux';
import { Users } from './Users';
import { followAC, setUsersAC, unfollowAC, UserType } from '../../redux/UsersReducer';
import { connect } from 'react-redux';

type MapStatePropsType = {
  users: Array<UserType>
}

type MapDispatchPropsType = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
