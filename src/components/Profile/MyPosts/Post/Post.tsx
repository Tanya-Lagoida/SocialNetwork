import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
  message: string;
  likesCount: number;
  id: number;
}

const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src='https://i.pinimg.com/originals/92/03/09/920309fd40791ceb1b26e5229edc0bcd.jpg'/>
            {props.message}
            <div className={s.likes}>
                like {props.likesCount}
            </div>
        </div>)
}

export default Post;
