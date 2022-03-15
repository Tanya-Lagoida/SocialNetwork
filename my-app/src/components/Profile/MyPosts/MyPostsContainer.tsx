import React from 'react';
import { addPostActionCreator } from '../../../redux/ProfileReducer';
import { MyPosts } from './MyPosts';
import { StoreContext } from '../../../StoreContext';

export const MyPostsContainer = () => {

  return <StoreContext.Consumer>
    {
    (store) => {
      const state = store.getState();

      const addPostAction = (NewPost: string) => {
        store.dispatch(addPostActionCreator(NewPost));
      };
      return <MyPosts
        posts={state.profilePage.posts}
        addPostAction={addPostAction}/>;
    }
  }
  </StoreContext.Consumer>
};

