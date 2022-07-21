import React from 'react';
import s from './Sidebar.module.css';

export type SidebarItemPropsType = {
  name: string;
  id?: number;
  avatar: string
}

export const SidebarItem = (props: SidebarItemPropsType) => {
  return (
    <div>
      <img  className={s.ava} src={props.avatar} />
      <div className={s.name}>{props.name}</div>
    </div>
  )

}