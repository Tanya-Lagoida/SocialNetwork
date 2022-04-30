import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { MyPostsPropsType } from './MyPostsContainer';

export const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map((p: { id: number; message: string; likesCount: number; }) =>
    <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);


  const [NewPost, setNewPost] = useState('');

  const newPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.currentTarget.value);
  };
  const addNewPost = () => {
    props.addPostAction(NewPost)
    setNewPost('')
  };

  // const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (e.code === 'Enter' && NewPost.trim() !== '') {
  //     props.addPostAction(NewPost)
  //     setNewPost('');
  //   }
  // };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={newPostHandler}
            value={NewPost}
          />
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

