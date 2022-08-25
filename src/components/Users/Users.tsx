import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/images.png';
import { UserType } from '../../redux/UsersReducer';
import { NavLink } from 'react-router-dom';
import { deleteUsers, postUsers } from '../../api/api';

type UsersPropsType = {
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void,
  users: Array<UserType>,
  follow: (userId: number) => void,
  unFollow: (userId: number) => void,
  toggleFollowingInProgress: (isFetching: boolean, id: number) => void,
  followingInProgress: Array<number>,
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
              className={s.button}
              onClick={() => {
                props.toggleFollowingInProgress(true, u.id)
                deleteUsers(u.id)
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unFollow(u.id);
                    }
                    props.toggleFollowingInProgress(false, u.id)
                  })

              }}>UNFOLLOW
            </button>
            :
            <button
              disabled={props.followingInProgress.some(id => id === u.id)}
              className={s.button}
              onClick={() => {
                props.toggleFollowingInProgress(true, u.id)
                postUsers(u.id)
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id);
                    }
                    props.toggleFollowingInProgress(false, u.id)
                  })

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
  </div>

}

