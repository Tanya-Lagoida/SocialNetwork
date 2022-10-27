import { Redirect } from 'react-router-dom';
import React, { ComponentType } from 'react';
import { AppStateType } from '../redux/ReduxStore';
import { connect } from 'react-redux';

type MapStatePropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth
  };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  function RedirectComponent(props: MapStatePropsType) {

    let { isAuth, ...restProps } = props
    if (!props.isAuth) return <Redirect to='/login'/>;
    return <Component {...restProps as T} />;
  }
  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
  return ConnectedRedirectComponent;

}