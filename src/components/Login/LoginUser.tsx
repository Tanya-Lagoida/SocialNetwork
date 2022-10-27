import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { UserType } from '../../redux/UsersReducer';
import { AppStateType } from '../../redux/ReduxStore';
import { authAPI, profileAPI } from '../../api/api';
import { setStatusAC } from '../../redux/ProfileReducer';
import { AddPostAC, LoginUserAC } from '../../redux/state';
import { log } from 'util';

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {



  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={'input'} name={'login'} placeholder={"Login"}/>
    </div>
    <div>
      <Field component={'input'} name={'password'} placeholder={"Password"}/>
    </div>
    <div>
      <Field component={'input'} name={'rememberMe'} type="checkbox"/> Remember me
    </div>
    <div>
      <button onClick={() => loginUserThunk}>Login</button>
    </div>
  </form>
};

const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)


export const LoginUser = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
};

export const loginUserAC = (login: string, password: string, rememberMe: boolean): LoginUserAC => ({ type: 'LOGIN_USER', login, password, rememberMe })

export const loginUserThunk = (login: string, password: string, rememberMe: boolean) => (dispatch: any) => {
  authAPI.loginUser( login, password, rememberMe )
    .then(response => {
      dispatch(loginUserAC( login, password, rememberMe ))
      console.log(response.data)
    });
}

type MapStatePropsType = {
  login: string
  password: string
  rememberMe: boolean
}

type MapDispatchPropsType = {

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  login: state.form.login,
  password: state.form,
  rememberMe: state.form
});

export default connect(mapStateToProps, { loginUserThunk })(LoginUser)


