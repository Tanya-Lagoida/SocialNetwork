import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserStatusThunk,
  setUserProfileThunk,
  updateStatusThunk
} from '../../redux/ProfileReducer';
import { AppStateType } from '../../redux/ReduxStore';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

type PathParamsType = {
  userId: string,
}

class ProfileContainer extends React.Component<RouteComponentProps<PathParamsType> & ProfileContainerPropsType> {

  componentDidMount(): void {

    let userId = this.props.match.params.userId;
    if (!userId) {
      // @ts-ignore
      userId = this.props.authorizedUserId;
    }
    this.props.setUserProfileThunk(userId)
    this.props.getUserStatusThunk(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusThunk={this.props.updateStatusThunk}
      />
    );
  }
};

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  };
};

type MapStatePropsType = {
  profile: any,
  status: string,
  authorizedUserId: number | null,
  isAuth: boolean
}

type MapDispatchPropsType = {
  setUserProfileThunk: (userId: string) => void,
  getUserStatusThunk: (userId: string) => void,
  updateStatusThunk: (status: string) => void,
}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

export default compose<React.ComponentType>(
  connect(MapStateToProps, { setUserProfileThunk, getUserStatusThunk, updateStatusThunk }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
