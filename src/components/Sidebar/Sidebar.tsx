import React from 'react';
import s from './Sidebar.module.css';
import { SidebarType } from '../../redux/state';
import { SidebarItem } from './SidebarItem';

type SidebarMainType= {
  sidebarItems: SidebarType[]
}


export const Sidebar = (props: SidebarMainType) => {

  let sidebarElements = props.sidebarItems.map((s: { name: string; id: number; avatar: string }) =>
    <SidebarItem name={s.name} id={s.id} avatar={s.avatar}/>)

  return (
  <div className={s.sidebar}>
    <h2 className={s.title}>Friends</h2>
    <div  className={s.avaAndName}>
      {sidebarElements}
    </div>





  </div>
  )


}
