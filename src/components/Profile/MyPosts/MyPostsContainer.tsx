import React from 'react';
import { addPostActionCreator } from '../../../redux/ProfileReducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { PostType } from '../../../redux/state';
import { AppStateType } from '../../../redux/ReduxStore';
import { Dispatch } from 'redux';

type MapStatePropsType = {
  posts: Array<PostType>
}

type MapDispatchPropsType = {
  addPostAction: (NewPost: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPostAction: (NewPost: string) => {
      dispatch(addPostActionCreator(NewPost))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

