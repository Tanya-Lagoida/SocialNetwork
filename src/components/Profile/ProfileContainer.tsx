import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/ProfileReducer';
import { AppStateType } from '../../redux/ReduxStore';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
// import { ProfileType } from './ProfileInfo/ProfileInfo';

type PathParamsType = {
  userId: string,
}

class ProfileContainer extends React.Component<RouteComponentProps<PathParamsType> & ProfileContainerPropsType> {

  componentDidMount(): void {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '2';
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
};

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile
  };
};

type MapStatePropsType = {
  profile: any
}

type MapDispatchPropsType = {
  setUserProfile: (profile: any) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
