import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
  isAuth: boolean,
  login: string | null
  authUsersThunk: () => void
}

const Header = (props: HeaderPropsType) => {
  return <header className={s.header}>
    <img
      src='https://st4.depositphotos.com/21087722/24267/i/111/depositphotos_242671456-stock-photo-pink-purple-lotus-foral-botanical.jpg'/>

      <div className={s.loginBlock}>
        {props.isAuth ? props.login :
        <NavLink to={'/login'}>Login</NavLink> }
      </div>
  </header>;
};

export default Header;