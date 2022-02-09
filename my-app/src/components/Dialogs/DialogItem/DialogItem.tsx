import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

export type DialogItemPropsType = {
  name: string;
  id: number;
  avatar: string
}

export const DialogItem = (props: DialogItemPropsType) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>
        <img className={s.avatar} src={props.avatar}/> {props.name} </NavLink>
    </div>
  );
};


