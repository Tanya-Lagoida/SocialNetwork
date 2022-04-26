import React from 'react';
import { UsersPropsType } from './UsersContainer';
import s from './Users.module.css';

export const Users = (props: UsersPropsType) => {

  // if (props.users.length === 0) {
  //   props.setUsers([
  //     {
  //       id: 1,
  //       photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/girls-ava1.jpg',
  //       followed: true,
  //       name: 'Tanya',
  //       status: 'Hello',
  //       location: { country: 'Belarus,', city: 'Minsk' }
  //     },
  //     {
  //       id: 2,
  //       photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/girls-ava1.jpg',
  //       followed: false,
  //       name: 'Sergej',
  //       status: 'I am boss',
  //       location: { country: 'Ukraine,', city: 'Kiev' }
  //     },
  //     {
  //       id: 3,
  //       photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/girls-ava1.jpg',
  //       followed: false,
  //       name: 'Aleksej',
  //       status: 'Hello',
  //       location: { country: 'Ukraine,', city: 'Odessa' }
  //     },
  //     {
  //       id: 4,
  //       photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/girls-ava1.jpg',
  //       followed: true,
  //       name: 'Margo',
  //       status: 'I am pretty',
  //       location: { country: 'Ukraine,', city: 'Kiev' }
  //     }
  //
  //   ])
  // }

  return <div>
    {
      props.users.map(u => <div key={u.id} className={s.allUser}>
        <div className={s.ava}><img src={u.photoUrl} alt="" className={s.userAvatar}/></div>
        <div className={s.allButton}>
          {u.followed
            ?
            <button
            className={s.button}
            onClick={() => {props.unfollow(u.id)}}>UNFOLLOW
          </button>
            :
            <button
            className={s.button}
            onClick={() => {props.follow(u.id) }}>FOLLOW
          </button>
          }
        </div>
        <div className={s.nameAndLocation}>
          <div className={s.name}>{u.name}</div>
          <div className={s.status}>{u.status}</div>
          <div className={s.country}>{u.location.country}</div>
          <div className={s.city}>{u.location.city}</div>
        </div>
      </div>)
    }
  </div>;
};