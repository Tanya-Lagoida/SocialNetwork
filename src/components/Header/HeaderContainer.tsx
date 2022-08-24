import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/AuthReducer';
import { AppStateType } from '../../redux/ReduxStore';

 class HeaderContainerComponent extends React.Component<AuthPropsType>{

  componentDidMount(): void {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data;
          this.props.setUserData(id, email, login)
        }
      });
  }
  render() {
    return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} />
  }
};

export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
  isAuth: boolean,
  login: string | null,
}
type MapDispatchPropsType = {
  setUserData: (userId: number | null, email: string | null, login: string | null) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export const HeaderContainer =  connect(mapStateToProps, {setUserData}) (HeaderContainerComponent);