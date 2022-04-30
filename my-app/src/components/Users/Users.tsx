import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../images/images.png'
import { UsersPropsType } from './UsersContainer';

export class Users extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render(){
  return <div>
    {
      this.props.users.map(u => <div key={u.id} className={s.allUser}>
        <div className={s.ava}>
          <img src={ u.photos.small != null ?  u.photos.small : userPhoto} alt="" className={s.userAvatar}/></div>
        <div className={s.allButton}>
          {u.followed
            ?
            <button
              className={s.button}
              onClick={() => {this.props.unfollow(u.id)}}>UNFOLLOW
            </button>
            :
            <button
              className={s.button}
              onClick={() => {this.props.follow(u.id) }}>FOLLOW
            </button>
          }
        </div>
        <div className={s.nameAndLocation}>
          <div className={s.name}>{u.name}</div>
          <div className={s.status}>{u.status}</div>
          <div className={s.country}>{"u.location.country"}</div>
          <div className={s.city}>{"u.location.city"}</div>
        </div>
      </div>)
    }
  </div>;
}
};