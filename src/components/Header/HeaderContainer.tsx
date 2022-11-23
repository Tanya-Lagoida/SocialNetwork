import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authUsersThunk, logoutUserThunk, setUserData } from '../../redux/AuthReducer';
import { AppStateType } from '../../redux/ReduxStore';

 class HeaderContainerComponent extends React.Component<AuthPropsType>{

  componentDidMount(): void {
    this.props.authUsersThunk()
  }
  render() {
    return <Header {...this.props}
                   isAuth={this.props.isAuth}
                   login={this.props.login}
                   authUsersThunk={this.props.authUsersThunk}
                   logoutUserThunk={this.props.logoutUserThunk}
    />
  }
};

export type AuthPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
  isAuth: boolean,
  login: string | null,
}
type MapDispatchPropsType = {
  setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void
  authUsersThunk: () => void
  logoutUserThunk: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export const HeaderContainer =  connect(mapStateToProps, {setUserData, authUsersThunk, logoutUserThunk}) (HeaderContainerComponent);