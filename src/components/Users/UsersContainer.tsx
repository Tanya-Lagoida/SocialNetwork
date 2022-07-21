import React from 'react';
import { AppStateType } from '../../redux/ReduxStore';
import {
  follow,
  setUsers,
  unFollow,
  UserType,
  setCurrentPage,
  setTotalUsersCount, toggleIsFetching
} from '../../redux/UsersReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { Users } from './Users';
import { Preloader } from '../common/Preloader';

export class UsersContainerComponent extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
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
}

type MapDispatchPropsType = {
  follow: (userId: number) => void,
  unFollow: (userId: number) => void,
  setUsers: (users: UserType[]) => void,
  setCurrentPage: (pageNumber: number) => void,
  setTotalUsersCount: (totalCount: number) => void,
  toggleIsFetching: (isFetching: boolean) => void,
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

export const UsersContainer = connect(mapStateToProps, {
  follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainerComponent);