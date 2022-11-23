import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/images.png';
import { UserType } from '../../redux/UsersReducer';
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void,
  users: Array<UserType>,
  followSuccess: (userId: number) => void,
  unFollowSuccess: (userId: number) => void,
  followingInProgress: Array<number>,
  followThunk(id: number): void,
  unFollowThunk(id: number): void,
  getUsersThunk: (currentPage: number, pageSize: number) => void,
  onPageChangedThunk: (pageNumber: number, pageSize: number) => void,
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
                     onClick={(event) => {
                       props.onPageChanged(p)
                     }}> {p} </span>
      })}
    </div>

    {
      props.users.map(u => <div key={u.id} className={s.allUser}>
        <NavLink to={'/profile/' + u.id}>
          <div className={s.ava}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                 className={s.userAvatar}/></div>
        </NavLink>
        <div className={s.allButton}>
          {u.followed
            ?
            <button
              disabled={props.followingInProgress.some(id => id === u.id)}
              // className={s.button}
              onClick={() => { props.unFollowThunk(u.id) }}>UNFOLLOW
            </button>
            :
            <button
              disabled={props.followingInProgress.some(id => id === u.id)}
              // className={s.button}
              onClick={() => { props.followThunk(u.id) }}>FOLLOW
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
  </div>

}

