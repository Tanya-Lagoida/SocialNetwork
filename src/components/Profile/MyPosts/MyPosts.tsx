import React, { useState } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { MyPostsPropsType } from './MyPostsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

export const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.posts.map((p: { id: number; message: string; likesCount: number; }) =>
    <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);


  const [NewPost, setNewPost] = useState('');


  const addNewPost = (values: any) => {
    props.addPostAction(values.newPostText);
    // setNewPost('');
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <AddPostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps> = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea} name='newPostText' validate={[required, maxLength10]}/>
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>;
};

const AddPostFormRedux = reduxForm({ form: 'postForm' })(AddPostForm);


