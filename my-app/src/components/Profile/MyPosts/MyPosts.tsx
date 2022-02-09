import React, { ChangeEvent, useState } from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from '../../../redux/state';

type MyPostsType = {
  posts: PostType[];
  addPost: (newText: string) => void
  // onNewPostHandler: (newText: string) => void
}

 export const MyPosts = (props:MyPostsType) => {

  let postsElements = props.posts.map((p: { id: number; message: string; likesCount: number; })  =>
    <Post id= {p.id} message={p.message} likesCount={p.likesCount}/>);


const [NewPost, setNewPost] = useState('')

const newPostHandler = (e: ChangeEvent<HTMLTextAreaElement> ) => {
  setNewPost(e.currentTarget.value)

}
const addNewPost = () => {
  props.addPost(NewPost)
  setNewPost('')
}

return (
  <div className={s.postsBlock}>
    <h3>My Posts</h3>
    <div>
      <div>
          <textarea
            onChange={newPostHandler}
            value={NewPost} />

      </div>
      <div>
        <button onClick={ addNewPost }>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
)
};

