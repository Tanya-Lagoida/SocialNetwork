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
        <div className={s.oneDialog}>
          <div><img className={s.avatar} alt={''} src={props.avatar}/></div>
          <div className={s.name}>{props.name}</div>
        </div> </NavLink>
    </div>
  );
};


