import React from 'react';
import { AppStateType } from '../../redux/ReduxStore';
import {
  follow,
  setUsers,
  unFollow,
  UserType,
  setCurrentPage,
  setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
} from '../../redux/UsersReducer';
import { connect } from 'react-redux';
import { Users } from './Users';
import { Preloader } from '../common/Preloader';
import { getUsers } from '../../api/api';

export class UsersContainerComponent extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true);

    getUsers(this.props.currentPage, this.props.pageSize)
      .then((data: { items: UserType[]; totalCount: number; }) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    getUsers(pageNumber, this.props.pageSize)
      .then((data: { items: UserType[]; }) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unFollow={this.props.unFollow}
             followingInProgress={this.props.followingInProgress}
             toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
  follow: (userId: number) => void,
  unFollow: (userId: number) => void,
  setUsers: (users: UserType[]) => void,
  setCurrentPage: (pageNumber: number) => void,
  setTotalUsersCount: (totalCount: number) => void,
  toggleIsFetching: (isFetching: boolean) => void,
  toggleFollowingInProgress: (isFetching: boolean, id: number) => void,
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
  follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
})(UsersContainerComponent);
