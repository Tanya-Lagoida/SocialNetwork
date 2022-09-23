import React from 'react';
import { AppStateType } from '../../redux/ReduxStore';
import {
  followSuccess,
  unFollowSuccess,
  UserType,
  getUsersThunk,
  onPageChangedThunk, followThunk, unFollowThunk
} from '../../redux/UsersReducer';
import { connect } from 'react-redux';
import { Users } from './Users';
import { Preloader } from '../common/Preloader';

export class UsersContainerComponent extends React.Component<UsersPropsType, AppStateType> {
  componentDidMount(): void {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged =(pageNumber: number) => {
    this.props.onPageChangedThunk(pageNumber, this.props.pageSize)
  };

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             followSuccess={this.props.followSuccess}
             unFollowSuccess={this.props.unFollowSuccess}
             followingInProgress={this.props.followingInProgress}
             followThunk={this.props.followThunk}
             unFollowThunk={this.props.unFollowThunk}
             getUsersThunk={this.props.getUsersThunk}
             onPageChangedThunk={this.props.onPageChangedThunk}
      />
    </>;
  }
};

type MapStatePropsType = {
  users: Array<UserType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: Array<number>,
}

type MapDispatchPropsType = {
  followSuccess: (userId: number) => void,
  unFollowSuccess: (userId: number) => void,
  followThunk: (id: number) => void,
  unFollowThunk: (id: number) => void,
  getUsersThunk: (currentPage: number, pageSize: number) => void,
  onPageChangedThunk: (pageNumber: number, pageSize: number) => void,
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

export const UsersContainer = connect(mapStateToProps, {
  followSuccess, unFollowSuccess, getUsersThunk, onPageChangedThunk, followThunk, unFollowThunk
})(UsersContainerComponent);
