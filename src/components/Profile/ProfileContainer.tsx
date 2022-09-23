import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {  setUserProfileThunk } from '../../redux/ProfileReducer';
import { AppStateType } from '../../redux/ReduxStore';
import { Redirect, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

type PathParamsType = {
  userId: string,
}

class ProfileContainer extends React.Component<RouteComponentProps<PathParamsType> & ProfileContainerPropsType> {

  componentDidMount(): void {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '2';
    }
    this.props.setUserProfileThunk(userId)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to='/login' />

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        setUserProfileThunk={this.props.setUserProfileThunk}
      />
    );
  }
};

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  };
};

type MapStatePropsType = {
  profile: any
  isAuth: boolean
}

type MapDispatchPropsType = {
  setUserProfileThunk: (userId: string) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, { setUserProfileThunk })(WithUrlDataContainerComponent);
