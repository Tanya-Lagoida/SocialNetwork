import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { loginUserThunk } from '../../redux/AuthReducer';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/ReduxStore';
import style from './../common/FormsControls/FormsControls.module.css';

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Input} name={'email'}
             placeholder={"email"}
             validate={[required]}
      />
    </div>
    <div>
      <Field component={Input} name={'password'}
             placeholder={"Password"}
             validate={[required]}
             type={'password'}
      />
    </div>
    <div>
      <Field component={Input} name={'rememberMe'} type="checkbox"/> Remember me
    </div>
    {
      props.error && <div className={style.commonLoginError}>{props.error}</div>
    }

    <div>
      <button>Login</button>
    </div>
  </form>
};

const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)

export const LoginUser = (props: LoginUsersType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginUserThunk(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
};

type MapDispatchPropsType = {
  loginUserThunk: (email: string, password: string, rememberMe: boolean) => void
}

type MapStateToPropsType = {
  isAuth: boolean
}

type LoginUsersType = MapStateToPropsType & MapDispatchPropsType
const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth
})

export const LoginUserContainer = connect(MapStateToProps, {loginUserThunk} )(LoginUser)


