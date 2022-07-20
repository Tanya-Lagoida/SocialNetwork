import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/images.png';
import { UserType } from '../../redux/UsersReducer';

type UsersPropsType = {
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void,
  users: Array<UserType>,
  follow: (userId: number) => void,
  unFollow: (userId: number) => void,
}

export const Users = (props: UsersPropsType) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p ? s.selectedPage : undefined}
                     onClick={(e) => {
                       props.onPageChanged(p);
                     }}> {p} </span>;
      })}
    </div>

    {
      props.users.map(u => <div key={u.id} className={s.allUser}>
        <div className={s.ava}>
          <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
               className={s.userAvatar}/></div>
        <div className={s.allButton}>
          {u.followed
            ?
            <button
              className={s.button}
              onClick={() => {
                props.unFollow(u.id);
              }}>UNFOLLOW
            </button>
            :
            <button
              className={s.button}
              onClick={() => {
                props.follow(u.id);
              }}>FOLLOW
            </button>
          }
        </div>
        <div className={s.nameAndLocation}>
          <div className={s.name}>{u.name}</div>
          <div className={s.status}>{u.status}</div>
          <div className={s.country}>{'u.location.country'}</div>
          <div className={s.city}>{'u.location.city'}</div>
        </div>
      </div>)
    }
  </div>;

};